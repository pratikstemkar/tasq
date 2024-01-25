package model

import (
	"time"

	"gorm.io/gorm"
)

type Task struct {
	gorm.Model
	Title         string
	Description   string
	Deadline      time.Time
	UserID        uint
	User          User `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	Collaborators []Collaboration
}

type Collaboration struct {
	gorm.Model
	UserID uint
	TaskID uint
	User   User `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	Task   Task `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}
