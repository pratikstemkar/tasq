package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"

	"github.com/pratikstemkar/tusq/handler"
)

func SetupRoutes(app *fiber.App) {
	api := app.Group("/api", logger.New())

	v1 := api.Group("/v1")
	v1.Get("/", handler.HelloHandler)
}
