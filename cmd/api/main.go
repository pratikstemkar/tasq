package main

import (
	"fmt"
	"os"
	"strconv"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	_ "github.com/joho/godotenv/autoload"

	"github.com/pratikstemkar/tusq/internal/database"
	"github.com/pratikstemkar/tusq/internal/router"
)

func main() {
	app := fiber.New()
	app.Use(cors.New())

	database.ConnectDB()

	router.SetupRoutes(app)

	port, _ := strconv.Atoi(os.Getenv("APP_PORT"))
	err := app.Listen(fmt.Sprintf(":%d", port))
	if err != nil {
		panic("Cannot start server.")
	}
}
