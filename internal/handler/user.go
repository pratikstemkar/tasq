package handler

import (
	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v4"
	"github.com/pratikstemkar/tusq/internal/database"
	"github.com/pratikstemkar/tusq/internal/model"
	"github.com/pratikstemkar/tusq/internal/util"
)

func GetUsers(c *fiber.Ctx) error {
	db := database.DB
	var users []model.User
	res := db.Find(&users)
	if res.RowsAffected == 0 {
		c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"status":  "error",
			"message": "Users not found.",
			"data":    res.Error,
		})
	}
	return c.JSON(fiber.Map{
		"status":  "success",
		"message": "Users Found.",
		"data":    users,
	})
}

func GetUser(c *fiber.Ctx) error {
	id := c.Params("id")
	db := database.DB
	var user model.User
	db.Preload("Roles").Find(&user, id)
	if user.Email == "" {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"status":  "error",
			"message": "No User found with ID",
			"data":    nil,
		})
	}
	return c.JSON(fiber.Map{
		"status":  "success",
		"message": "User Found",
		"data":    user,
	})
}

func CreateUser(c *fiber.Ctx) error {
	type NewUser struct {
		Email string
		Roles []model.Role
	}

	db := database.DB
	user := new(model.User)
	if err := c.BodyParser(user); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status":  "error",
			"message": "Review your input.",
			"data":    err,
		})
	}

	hash, err := util.HashPassword(user.Password)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"status":  "error",
			"message": "Error in hashing password.",
			"data":    err,
		})
	}

	var role model.Role
	db.Find(&role, "name = ?", "user")
	if role.Name == "" {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"status": "error",
			"data":   nil,
		})
	}

	user.Roles = append(user.Roles, role)
	user.Image = "https://placehold.co/400x400.png"
	user.Password = hash

	if err := db.Create(&user).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"status":  "error",
			"message": "Couldn't Create User.",
			"data":    err,
		})
	}

	newUser := NewUser{
		Email: user.Email,
		Roles: user.Roles,
	}

	return c.JSON(fiber.Map{
		"status":  "success",
		"message": "User created",
		"data":    newUser,
	})
}

func UpdateUser(c *fiber.Ctx) error {
	type UpdateUserInput struct {
		ID    string `json:"id"`
		Email string `json:"email"`
		Image string `json:"image"`
	}

	var uui UpdateUserInput
	if err := c.BodyParser(&uui); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status":  "error",
			"message": "Review your input",
			"data":    err,
		})
	}

	id := c.Params("id")
	token := c.Locals("user").(*jwt.Token)

	if !util.ValidToken(token, id) {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"status":  "error",
			"message": "Invalid Token ID",
			"data":    nil,
		})
	}

	db := database.DB
	var user model.User

	db.First(&user, id)
	user.Email = uui.Email
	user.Image = uui.Image
	db.Save(&user)

	return c.JSON(fiber.Map{
		"status":  "success",
		"message": "User updated successfully",
		"data":    uui,
	})
}

func DeleteUser(c *fiber.Ctx) error {
	type PasswordInput struct {
		Password string `json:"password"`
	}

	var pi PasswordInput
	if err := c.BodyParser(&pi); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status":  "error",
			"message": "Review your input",
			"data":    err,
		})
	}

	id := c.Params("id")
	token := c.Locals("user").(*jwt.Token)

	if !util.ValidToken(token, id) {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"status":  "error",
			"message": "Invalid token id",
			"data":    nil,
		})
	}

	if !util.ValidRole(token, "admin") {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"status":  "error",
			"message": "Not valid role",
			"data":    nil,
		})
	}

	if !util.ValidUser(id, pi.Password) {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"status":  "error",
			"message": "Not valid user",
			"data":    nil,
		})
	}

	db := database.DB
	var user model.User
	db.First(&user, "id = ?", id)
	db.Delete(&user)

	return c.JSON(fiber.Map{
		"status":  "success",
		"message": "User deleted successfully",
		"data":    nil,
	})
}
