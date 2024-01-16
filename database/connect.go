package database

import (
	"fmt"
	"os"
	"strconv"

	_ "github.com/lib/pq"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var (
	DB_HOST     = os.Getenv("DB_HOST")
	DB_USER     = os.Getenv("DB_USER")
	DB_PORT, _  = strconv.Atoi(os.Getenv("DB_PORT"))
	DB_PASSWORD = os.Getenv("DB_PASSWORD")
	DB_DATABASE = os.Getenv("DB_DATABASE")
)

func ConnectDB() {
	var err error

	dsn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE)
	DB, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(err)
	}

	fmt.Println("DB Connection Opened.")
	DB.AutoMigrate()
	fmt.Println("Database Auto Migration Successful.")
}
