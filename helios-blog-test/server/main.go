package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Post struct {
	ID      int    `json:"id"`
	Title   string `json:"title"`
	Content string `json:"content"`
}

func main() {
	http.HandleFunc("/posts", func(w http.ResponseWriter, r *http.Request) {
		posts := []Post{
			{ID: 1, Title: "First Post", Content: "This is the content of the first post."},
			{ID: 2, Title: "Second Post", Content: "This is the content of the second post."},
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(posts)
	})

	fmt.Println("Server listening on port 8080")
	http.ListenAndServe(":8080", nil)
}