package data

import (
	"fmt"
	"math/rand"
	"sync"
	"time"
)

// ChatData -
type ChatData struct {
	Data []string
	M    *sync.RWMutex
}

// NewChatData returns a new chat data object
func NewChatData() *ChatData {
	return &ChatData{
		Data: []string{},
		M:    &sync.RWMutex{},
	}
}

// AddChatMessage -
func (c *ChatData) AddChatMessage() {
	for {
		c.M.Lock()
		c.Data = append(c.Data, fmt.Sprint(int64(rand.Intn(100))))
		c.M.Unlock()
		time.Sleep(2 * time.Second)
	}
}

// GetChatData -
func (c *ChatData) GetChatData() []string {
	c.M.RLock()
	defer c.M.RUnlock()
	return c.Data
}
