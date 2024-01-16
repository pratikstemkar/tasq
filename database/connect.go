package database

import (
	"fmt"
	"os"

	_ "github.com/lib/pq"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var (
	DB_HOST     = os.Getenv("DB_HOST")
	DB_USER     = os.Getenv("DB_USER")
	DB_PASSWORD = os.Getenv("DB_PASSWORD")
	DB_DATABASE = os.Getenv("DB_DATABASE")
)

func ConnectDB() {
	var err error

	connStr := fmt.Sprintf(
		"postgres://%s:%s@%s/%s?sslmode=require",
		DB_USER,
		DB_PASSWORD,
		DB_HOST,
		DB_DATABASE,
	)
	DB, err := gorm.Open(postgres.Open(connStr), &gorm.Config{})
	if err != nil {
		panic(err)
	}

	fmt.Println("DB Connection Opened.")
	DB.AutoMigrate()
	fmt.Println("Database Auto Migration Successful.")
}
