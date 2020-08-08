package main

import (
	"net/http"
	"strconv"
	"time"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

var turn = 1

func main() {
	// Echo instance
	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// Routes
	e.GET("/", hello)

	// Routes
	e.GET("/turn", getTurn)

	// batch
	go updateTurn()

	// Start server
	e.Logger.Fatal(e.Start(":1323"))
}

func updateTurn() {
	for {
		turn = turn + 1
		time.Sleep(time.Second * 3)
	}
}

// Handler
func hello(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}

// Handler
func getTurn(c echo.Context) error {
	return c.String(http.StatusOK, strconv.Itoa(turn))
}
