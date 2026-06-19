package main

import (
	"encoding/json"
	"errors"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"
)

type Profile struct {
	Name         string        `json:"name"`
	Avatar       string        `json:"avatar"`
	AvatarAlt    string        `json:"avatarAlt"`
	Introduction string        `json:"introduction"`
	Cards        []ContactCard `json:"cards"`
}

type ContactCard struct {
	ID          string `json:"id"`
	Kind        string `json:"kind"`
	Label       string `json:"label"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Href        string `json:"href,omitempty"`
	Handle      string `json:"handle,omitempty"`
	Asset       string `json:"asset,omitempty"`
	Action      string `json:"action"`
	Theme       string `json:"theme,omitempty"`
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/api/profile", profileHandler)
	mux.HandleFunc("/", spaHandler("frontend/dist"))

	addr := env("ADDR", ":8080")
	log.Printf("personal blog listening on http://localhost%s", addr)
	if err := http.ListenAndServe(addr, mux); err != nil {
		log.Fatal(err)
	}
}

func profileHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		w.Header().Set("Allow", http.MethodGet)
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	if err := json.NewEncoder(w).Encode(defaultProfile()); err != nil {
		http.Error(w, "failed to encode profile", http.StatusInternalServerError)
	}
}

func spaHandler(root string) http.HandlerFunc {
	fs := http.FileServer(http.Dir(root))

	return func(w http.ResponseWriter, r *http.Request) {
		if strings.HasPrefix(r.URL.Path, "/api/") {
			http.NotFound(w, r)
			return
		}

		cleanPath := filepath.Clean(strings.TrimPrefix(r.URL.Path, "/"))
		if cleanPath == "." {
			cleanPath = "index.html"
		}

		fullPath := filepath.Join(root, cleanPath)
		if _, err := os.Stat(fullPath); err == nil {
			fs.ServeHTTP(w, r)
			return
		} else if !errors.Is(err, os.ErrNotExist) {
			http.Error(w, "failed to read asset", http.StatusInternalServerError)
			return
		}

		indexPath := filepath.Join(root, "index.html")
		if _, err := os.Stat(indexPath); err != nil {
			http.Error(w, "frontend build not found; run npm build in frontend", http.StatusNotFound)
			return
		}
		http.ServeFile(w, r, indexPath)
	}
}

func defaultProfile() Profile {
	return Profile{
		Name:         "ZYF's Space",
		Avatar:       "/assets/avatar-placeholder.svg",
		AvatarAlt:    "Personal avatar portrait",
		Introduction: "Welcome. I collect my projects, writing, and everyday thoughts here so you can quickly know who I am and where to find me.",
		Cards: []ContactCard{
			{
				ID:          "github",
				Kind:        "github",
				Label:       "Projects",
				Title:       "GitHub",
				Description: "A place to see what I build, polish, and keep improving over time.",
				Href:        "https://github.com/",
				Handle:      "@your-github",
				Action:      "View projects",
				Theme:       "work",
			},
			{
				ID:          "xiaohongshu",
				Kind:        "xiaohongshu",
				Label:       "Moments",
				Title:       "Xiaohongshu",
				Description: "Images, short thoughts, and small observations from work and daily life.",
				Href:        "https://www.xiaohongshu.com/",
				Handle:      "RED ID: your-id",
				Action:      "Open moments",
				Theme:       "journal",
			},
			{
				ID:          "wechat",
				Kind:        "wechat",
				Label:       "Contact",
				Title:       "WeChat",
				Description: "Scan to connect on WeChat.",
				Asset:       "/assets/wechat-qr-placeholder.svg",
				Handle:      "",
				Action:      "",
				Theme:       "contact",
			},
		},
	}
}

func env(key, fallback string) string {
	value := strings.TrimSpace(os.Getenv(key))
	if value == "" {
		return fallback
	}
	return value
}
