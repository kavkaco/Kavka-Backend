// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts,import_extension=.ts,js_import_style=module"
// @generated from file protobuf/auth/v1/auth.proto (package protobuf.auth.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AuthenticateRequest, AuthenticateResponse, ChangePasswordRequest, ChangePasswordResponse, LoginRequest, LoginResponse, RefreshTokenRequest, RefreshTokenResponse, RegisterRequest, RegisterResponse, SendResetPasswordRequest, SendResetPasswordResponse, SubmitResetPasswordRequest, SubmitResetPasswordResponse, VerifyEmailRequest, VerifyEmailResponse } from "./auth_pb.ts";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service protobuf.auth.v1.AuthService
 */
export const AuthService = {
  typeName: "protobuf.auth.v1.AuthService",
  methods: {
    /**
     * @generated from rpc protobuf.auth.v1.AuthService.Login
     */
    login: {
      name: "Login",
      I: LoginRequest,
      O: LoginResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc protobuf.auth.v1.AuthService.Register
     */
    register: {
      name: "Register",
      I: RegisterRequest,
      O: RegisterResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc protobuf.auth.v1.AuthService.VerifyEmail
     */
    verifyEmail: {
      name: "VerifyEmail",
      I: VerifyEmailRequest,
      O: VerifyEmailResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc protobuf.auth.v1.AuthService.SendResetPassword
     */
    sendResetPassword: {
      name: "SendResetPassword",
      I: SendResetPasswordRequest,
      O: SendResetPasswordResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc protobuf.auth.v1.AuthService.SubmitResetPassword
     */
    submitResetPassword: {
      name: "SubmitResetPassword",
      I: SubmitResetPasswordRequest,
      O: SubmitResetPasswordResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc protobuf.auth.v1.AuthService.ChangePassword
     */
    changePassword: {
      name: "ChangePassword",
      I: ChangePasswordRequest,
      O: ChangePasswordResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc protobuf.auth.v1.AuthService.Authenticate
     */
    authenticate: {
      name: "Authenticate",
      I: AuthenticateRequest,
      O: AuthenticateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc protobuf.auth.v1.AuthService.RefreshToken
     */
    refreshToken: {
      name: "RefreshToken",
      I: RefreshTokenRequest,
      O: RefreshTokenResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

