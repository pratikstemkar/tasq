package handler

import (
	"errors"
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v4"
	_ "github.com/joho/godotenv/autoload"
	"github.com/pratikstemkar/tusq/internal/database"
	"github.com/pratikstemkar/tusq/internal/model"
	"github.com/pratikstemkar/tusq/internal/util"
	"gorm.io/gorm"
)

func getUserByEmail(e string) (*model.User, error) {
	db := database.DB
	var user model.User
	if err := db.Where(&model.User{Email: e}).Preload("Roles").Find(&user).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, nil
		}
		return nil, err
	}
	return &user, nil
}

func getUserByUsername(u string) (*model.User, error) {
	db := database.DB
	var user model.User
	if err := db.Where(&model.User{Username: u}).Preload("Roles").Find(&user).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, nil
		}
		return nil, err
	}
	return &user, nil
}

func GetRolesList(roles []model.Role) []string {
	var rolesList []string
	for _, role := range roles {
		rolesList = append(rolesList, role.Name)
	}
	return rolesList
}

func Login(c *fiber.Ctx) error {
	type LoginInput struct {
		Identity string `json:"identity"`
		Password string `json:"password"`
	}

	type UserData struct {
		ID       uint     `json:"id"`
		Username string   `json:"username"`
		Email    string   `json:"email"`
		Password string   `json:"password"`
		Roles    []string `json:"roles"`
	}

	type UserResponse struct {
		ID       uint     `json:"id"`
		Username string   `json:"username"`
		Email    string   `json:"email"`
		Image    string   `json:"image"`
		Roles    []string `json:"roles"`
	}

	input := new(LoginInput)
	var userData UserData
	var userResponse UserResponse

	if err := c.BodyParser(&input); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status":  "error",
			"message": "Error on Login",
			"data":    err,
		})
	}

	identity := input.Identity
	pass := input.Password
	userModel, err := new(model.User), *new(error)

	if util.IsEmail(identity) {
		userModel, err = getUserByEmail(identity)
	} else {
		userModel, err = getUserByUsername(identity)
	}

	if userModel == nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"status":  "error",
			"message": "User not found",
			"data":    err,
		})
	} else {
		userData = UserData{
			ID:       userModel.ID,
			Username: userModel.Username,
			Email:    userModel.Email,
			Password: userModel.Password,
			Roles:    GetRolesList(userModel.Roles),
		}
		userResponse = UserResponse{
			ID:       userModel.ID,
			Username: userModel.Username,
			Email:    userModel.Email,
			Image:    userModel.Image,
			Roles:    GetRolesList(userModel.Roles),
		}
	}

	if !util.CheckPasswordHash(pass, userData.Password) {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"status":  "error",
			"message": "Invalid password",
			"data":    err,
		})
	}

	token := jwt.New(jwt.SigningMethodHS256)

	claims := token.Claims.(jwt.MapClaims)
	claims["username"] = userData.Username
	claims["id"] = userData.ID
	claims["exp"] = time.Now().Add(time.Hour * 72).Unix()
	claims["roles"] = []string(userData.Roles)

	t, err := token.SignedString([]byte(os.Getenv("JWT_SECRET")))
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}

	return c.JSON(fiber.Map{
		"status":  "success",
		"message": "Success Login",
		"token":   t,
		"user":    userResponse,
	})

}

func CheckTokenAuth(c *fiber.Ctx) error {
	id := c.Params("id")
	token := c.Locals("user").(*jwt.Token)

	if !util.ValidToken(token, id) {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"status":  "error",
			"message": "Invalid Token",
			"data":    nil,
		})
	}

	return c.JSON(fiber.Map{
		"status":  "success",
		"message": "Token is valid.",
		"data":    nil,
	})
}
