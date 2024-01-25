package model

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Email    string `gorm:"unique;not null"`
	Username string `gorm:"unique;not null"`
	Password string
	Image    string
	Roles    []Role `gorm:"many2many:user_roles;"`
	Tasks    []Task
}

type Role struct {
	gorm.Model
	Name        string `gorm:"unique;not null"`
	Description string
}
