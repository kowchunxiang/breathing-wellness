# Breath — Guided Breathing Wellness App

A modern multilingual breathing wellness web application designed to provide simple, guided breathing sessions through a calm and minimal interface.

The project focuses on accessible breathing exercises, smooth visual guidance, multilingual support, and a polished responsive user experience.

## Live Demo

https://breathing-wellness.onrender.com

> If the Render URL changes, replace the link above with the latest deployment URL.

---

## Features

### Guided Breathing Exercises

The application currently includes four breathing methods:

- **Slow Breathing** — 4s inhale · 6s exhale
- **Box Breathing** — 4 · 4 · 4 · 4
- **Cyclic Sighing** — inhale · second inhale · long exhale
- **4-7-8 Breathing** — 4s inhale · 7s hold · 8s exhale

### Interactive Breathing Sessions

Each breathing session includes:

- 1-minute and 3-minute session options
- 5-second preparation countdown
- Animated breathing guide
- Inhale, hold, and exhale phase indicators
- Individual phase countdown
- Overall session timer
- Progress indicator
- Pause and resume controls
- Session completion screen

### Smart Time-Based Suggestions

The application can recommend different breathing exercises depending on the time of day:

- Morning
- Afternoon
- Evening
- Night

### Ambient Sound

Optional ambient audio is generated directly in the browser using the **Web Audio API**.

The audio system includes:

- Soft ambient chords
- Smooth chord transitions
- Light bell tones
- Low-pass filtering
- Spatial delay effects
- Sound on/off control

### Multilingual Interface

The application supports:

- English
- 中文
- Bahasa Melayu

Users can switch languages instantly without refreshing the page.

### Responsive Design

The interface is designed to work across:

- Desktop
- Tablet
- Mobile

The visual design follows a clean wellness-oriented style with soft gradients, glass-like surfaces, subtle animations, and responsive layouts.

---

## Tech Stack

### Frontend

- JavaScript
- React
- CSS
- Vite

### Browser APIs

- Web Audio API
- JavaScript Date API

### Deployment

- GitHub
- Render Static Site

---

## Project Structure

```text
breathing-wellness/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── .gitignore
└── README.md