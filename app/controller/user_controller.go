package controller

import (
	"Kavka/app/presenters"
	validator "Kavka/app/validators"
	"Kavka/internal/service"
	"Kavka/pkg/session"
	"Kavka/utils/bearer"
	"fmt"

	"github.com/gofiber/fiber/v2"
)

type UserController struct {
	userService *service.UserService
}

func NewUserController(userService *service.UserService) *UserController {
	return &UserController{userService}
}

func (ctrl *UserController) HandleLogin(ctx *fiber.Ctx) error {
	body := validator.Validate[validator.UserLoginDto](ctx)
	phone := body.Phone

	otp, err := ctrl.userService.Login(phone)
	if err != nil {
		return err
	}

	// FIXME - Gonna be removed after implementing SMS service.
	fmt.Printf("OTP Code: %d\n", otp)

	ctx.JSON(presenters.SimpleMessage{
		Code:    200,
		Message: "OTP Code Sent",
	})

	return nil
}

func (ctrl *UserController) HandleVerifyOTP(ctx *fiber.Ctx) error {
	body := validator.Validate[validator.UserVerifyOTPDto](ctx)

	tokens, err := ctrl.userService.VerifyOTP(body.Phone, body.OTP)

	if err != nil {
		return err
	}

	presenters.SendTokensHeader(ctx, *tokens)

	ctx.JSON(presenters.SimpleMessage{
		Code:    200,
		Message: "Logged in successfully",
	})

	return nil
}

func (ctrl *UserController) HandleRefreshToken(ctx *fiber.Ctx) error {
	headers := ctx.GetReqHeaders()
	refreshToken := headers["Refresh"]

	refreshToken, bearerRfOk := bearer.RefreshToken(ctx)

	if bearerRfOk {
		accessToken, bearerAtOk := bearer.AccessToken(ctx)

		if bearerAtOk {

			newAccessToken, refErr := ctrl.userService.RefreshToken(refreshToken, accessToken)
			if refErr != nil {
				return refErr
			}

			newTokens := session.LoginTokens{AccessToken: newAccessToken, RefreshToken: refreshToken}
			presenters.SendTokensHeader(ctx, newTokens)

			ctx.JSON(presenters.SimpleMessage{
				Code:    200,
				Message: "Tokens refreshed successfully",
			})
		}
	}

	return nil
}

func (ctrl *UserController) HandleAuthenticate(ctx *fiber.Ctx) error {
	accessToken, bearerOk := bearer.AccessToken(ctx)

	if bearerOk {
		userInfo, err := ctrl.userService.Authenticate(accessToken)
		if err != nil {
			return err
		}

		presenters.ResponseUserInfo(ctx, userInfo)
	}

	return nil
}