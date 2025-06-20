package main

import (
	"encoding/json"
	"net/http"
)

type Post struct {
	ID    int    `json:"id"`
	Title string `json:"title"`
	Body  string `json:"body"`
}

var posts = []Post{
	{ID: 1, Title: "Hello World", Body: "This is my first post."},
	{ID: 2, Title: "Second Post", Body: "This is my second post."},
}

func postsHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(posts)
}

func main() {
	http.HandleFunc("/api/posts", postsHandler)
	http.ListenAndServe(":8080", nil)
}