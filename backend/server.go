package main

import (
	"Tahagram/configs"
	"Tahagram/logs"
	"Tahagram/routers"
	"fmt"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

var AppConfigs configs.AppConfigs

func parseConfigs() {
	wd, _ := os.Getwd()

	appConfigs, appConfigsErr := configs.ParseAppConfig(wd + "/configs/configs.yml")
	if appConfigsErr != nil {
		fmt.Println("Error in parsing app configs")
		os.Exit(1)
	}

	AppConfigs = *appConfigs
}

func main() {
	parseConfigs()

	app := fiber.New(
		fiber.Config{
			AppName:      "Tahagram",
			ServerHeader: "Fiber",
			Prefork:      true,
		},
	)

	app.Use(cors.New(
		cors.Config{
			AllowOrigins: configs.GetAllowOrigins(),
		},
	))

	api := app.Group("/api")

	logs.InitLogger(app)

	routers.InitUsers(api)

	log.Fatal(
		app.Listen(
			fmt.Sprintf(
				"%s:%d",
				"0.0.0.0",
				AppConfigs.ListenPort,
			),
		),
	)
}
