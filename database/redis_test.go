package database

import (
	"Kavka/config"
	"context"
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
)

func TestRedis(t *testing.T) {
	// Read configs

	cfg, err := config.Read("../config/configs.yml")

	assert.NoError(t, err)

	// Establish connection

	redisClient := GetRedisDBInstance(cfg.Redis)

	// Set Some Values

	status := redisClient.Set(context.TODO(), "name", "Sample", time.Second*3)

	assert.NoError(t, status.Err())

	// Get Some Values

	name, getErr := redisClient.Get(context.TODO(), "name").Result()

	assert.NoError(t, getErr)
	assert.Equal(t, name, "Sample")
}
