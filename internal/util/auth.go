package util

import (
	"fmt"
	"net/mail"
	"time"

	"github.com/golang-jwt/jwt/v4"
	"github.com/pratikstemkar/tusq/internal/database"
	"github.com/pratikstemkar/tusq/internal/model"
	"golang.org/x/crypto/bcrypt"
)

func HashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}

func ValidToken(t *jwt.Token, id string) bool {
	claims := t.Claims.(jwt.MapClaims)
	uid := string(claims["id"].(string))
	exp := float64(claims["exp"].(float64))
	fmt.Println(exp)
	fmt.Println(time.Now().Unix())

	return uid == id && exp > float64(time.Now().Unix())
}

func ValidUser(id string, p string) bool {
	db := database.DB
	var user model.User
	db.First(&user, id)
	if user.Email == "" {
		return false
	}
	if !CheckPasswordHash(p, user.Password) {
		return false
	}
	return true
}

func ValidRole(t *jwt.Token, roleName string) bool {
	claims := t.Claims.(jwt.MapClaims)
	roles := claims["roles"].([]interface{})
	roleList := roles
	for _, role := range roleList {
		if role.(string) == roleName {
			return true
		}
	}
	return false
}

func CheckPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}

func IsEmail(email string) bool {
	_, err := mail.ParseAddress(email)
	return err == nil
}
