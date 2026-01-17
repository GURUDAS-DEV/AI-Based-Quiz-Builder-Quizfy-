# Quizfy – AI‑Powered Quiz Builder & Live Session Platform  

![Quizfy Logo](./src/assets/Images/Logo/LOGO.png)

[![Vite Build](https://img.shields.io/badge/Vite-4.5.0-blue?logo=vite)](https://vitejs.dev)  
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://reactjs.org)  
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.2.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com)  
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)  
[![Node.js](https://img.shields.io/badge/Node-%3E%3D18.0.0-success?logo=node.js)](https://nodejs.org)  
[![CI](https://github.com/GURUDAS-DEV/AI-Based-Quiz-Builder-Quizfy-/actions/workflows/ci.yml/badge.svg)](https://github.com/GURUDAS-DEV/AI-Based-Quiz-Builder-Quizfy-/actions)  
[![Docker](https://img.shields.io/badge/Docker-%20-%230db7ed?logo=docker)](https://hub.docker.com/r/quizfy)  

**Live demo** | **Documentation** | **Issues**  
---|---|---  
[🚀 Demo (hosted)](https://quizfy-demo.vercel.app) | [📚 Docs (this file)](#usage) | [🐞 Report a bug](https://github.com/GURUDAS-DEV/AI-Based-Quiz-Builder-Quizfy-/issues)  

---  

## Overview  

Quizfy is a modern web application that lets educators, corporate trainers, and event organizers **create AI‑generated quizzes in seconds** and **run real‑time live quiz sessions** with participants. The frontend is built with React 19, Vite, and TailwindCSS, while a Node/Express backend (hosted at `https://quizidy-backend.duckdns.org`) handles authentication, OpenAI/Gemini‑driven question generation, and Socket.io‑based live interaction.

**Target audience:** teachers, corporate trainers, event organizers, and anyone who wants to run interactive quizzes without manual question authoring.  

**Current version:** `1.5.0` (stable).  

---  

## Features  

| Feature | Description | Status |
|---------|-------------|--------|
| **AI‑Generated Quiz** | Uses Google Gemini / OpenAI to generate questions, multiple‑choice options, and detailed explanations. | ✅ Stable |
| **AI Quiz Review & Edit** | UI for admins to preview, edit, reorder, and enrich generated questions before saving. | ✅ Stable |
| **User Authentication** | JWT‑based login, automatic token refresh, role‑based UI (admin vs participant). | ✅ Stable |
| **Live Quiz Sessions** | Admin can start/stop a session, broadcast questions, and receive answers in real time via Socket.io. | ✅ Stable |
| **Participant Interaction** | Chat, polls, rankings, and a “raise hand” feature for Q&A. | ✅ Stable |
| **Analytics Dashboard** | Real‑time charts (Chart.js) showing answer distribution, response times, and overall scores. | ✅ Stable |
| **Gamified UI** | Confetti, animated progress, and toast notifications for correct/incorrect answers. | ✅ Stable |
| **Responsive Design** | TailwindCSS + custom fonts (Poppins) – works on desktop, tablet, and mobile. | ✅ Stable |
| **Export / Share** | Generate shareable session links, download results as CSV. | ✅ Stable |
| **Extensible Plugin System** | Component‑based architecture makes it easy to add new question types or visualizations. | 🧪 Experimental |
| **AI Features Page** | Dedicated UI for exploring AI‑generated content, previewing quizzes, and editing before saving. | ✅ Stable |
| **Multilingual Support** *(new)* | Generate quizzes in multiple languages using the underlying LLMs. | 🧪 Experimental |

---  

## Tech Stack  

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Framework** | React 19 (`react-router@7`) | UI rendering & routing |
| **Bundler / Dev Server** | Vite 7 | Fast HMR & production builds |
| **Styling** | TailwindCSS 4, PostCSS, Autoprefixer | Utility‑first responsive design |
| **Icons** | `lucide-react`, `react-icons`, `@flaticon/flaticon-uicons` | Consistent SVG icon set |
| **AI** | `@google/genai`, `openai` | Generate quiz content |
| **Real‑time** | `socket.io-client` | Live session communication |
| **State Management** | React Context (`authContext.jsx`) | Auth state & user info |
| **Charts & Visuals** | `chart.js`, `react-confetti`, `canvas-confetti` | Data visualisation & celebration effects |
| **Testing** | Vitest, React Testing Library | Unit & integration tests |
| **Backend (external)** | Node/Express (hosted at `quizidy-backend.duckdns.org`) | Auth, token refresh, quiz generation, Redis cache |
| **Cache / PubSub** | `redis` (backend) | Fast session state sharing |
| **Linting / Formatting** | ESLint (`@eslint/js`, `eslint-plugin-react-hooks`), Prettier | Code quality |
| **Deployment** | `serve`, Docker (multi‑stage) | Production static serving |

---  

## Getting Started  

### Prerequisites  

| Tool | Minimum version |
|------|-----------------|
| Node.js | 18.x |
| npm (or Yarn) | 9.x |
| Git | any recent version |
| (Optional) Docker | 20.x |

### Installation  

```bash
# 1️⃣ Clone the repository
git clone https://github.com/GURUDAS-DEV/AI-Based-Quiz-Builder-Quizfy-.git
cd AI-Based-Quiz-Builder-Quizfy-

# 2️⃣ Install dependencies
npm install   # or `yarn install`

# 3️⃣ (Optional) Install Vite globally for easier CLI usage
npm i -g vite
```

### Configuration  

Create a `.env` file in the project root (Vite automatically prefixes env vars with `VITE_`):

```dotenv
# Base URL of the backend API (must be reachable from the browser)
VITE_BACKEND_URL=https://quizidy-backend.duckdns.org

# (Optional) Port for the Vite dev server
VITE_PORT=5173

# (Optional) Socket.io endpoint if it differs from the backend URL
VITE_SOCKET_URL=wss://quizidy-backend.duckdns.org
```

> **Tip:** The backend must allow CORS for `http://localhost:5173` (or the port you set).

### Running the App  

```bash
# Development server with hot‑module replacement
npm run dev
# → Open http://localhost:5173 in your browser
```

### Building for Production  

```bash
npm run build          # Generates ./dist
npm run preview        # Serves the built files locally (uses `serve`)
```

You can also serve the `dist` folder with any static file server (NGINX, Apache, Docker, Vercel, Netlify, etc.).

---  

## Usage  

### 1️⃣ Sign‑up / Login  

- Navigate to **/login** or **/register**.  
- After a successful login, a JWT is stored in `localStorage` and the UI updates to the authenticated state.  

### 2️⃣ Create an AI‑Generated Quiz  

1. Click **“Create Quiz”** in the navigation bar.  
2. Enter a **topic** (e.g., *“World War II”*) and optional **difficulty**.  
3. Press **Generate** – the frontend calls the backend, which forwards the request to the Google Gemini / OpenAI API.  
4. Review the generated questions on the **AI Quiz Review & Edit** page, make any adjustments, then **Save**.  

```jsx
// src/Components/AI_Features_page/AI_Powered_Quiz.jsx
await fetch(`${import.meta.env.VITE_BACKEND_URL}/quiz/generate`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
  body: JSON.stringify({ topic, difficulty }),
});
```

### 3️⃣ Run a Live Session (Admin)  

1. From the dashboard, select a saved quiz and click **“Go Live”**.  
2. Share the generated session link with participants.  
3. Use the admin toolbar to **advance questions**, **view analytics**, **open polls**, or **send messages**.  

### 4️⃣ Participate  

- Participants join via the shared link, enter a display name, and answer questions in real time.  
- Immediate feedback (correct/incorrect) is shown with confetti for right answers.  

### 5️⃣ Review Results  

- After the session ends, the admin can download a CSV of all responses or view a summary chart (Bar, Pie, Donut).  

---  

## API Documentation (Frontend → Backend)  

| Method | Endpoint | Auth | Description | Example Response |
|--------|----------|------|-------------|------------------|
| `POST` | `/auth/login` | ❌ | Returns `accessToken` and `refreshToken`. | `{ "accessToken": "...", "refreshToken": "..." }` |
| `GET` | `/user/token/RefreshAccessToken` | ✅ (cookie) | Refreshes the JWT; used automatically by `authContext`. | `{ "accessToken": "..." }` |
| `POST` | `/quiz/generate` | ✅ | Sends `{ topic, difficulty }`; returns generated questions. | `{ "questions": [{ "id": "...", "text": "...", "options": [...] }] }` |
| `GET` | `/quiz/:id` | ✅ | Retrieves a saved quiz. | `{ "id": "...", "title": "...", "questions": [...] }` |
| `PUT` | `/quiz/:id/review` | ✅ | Saves edits made on the **AI Quiz Review & Edit** page. | `{ "message": "Quiz updated successfully." }` |
| `POST` | `/session/:quizId/start` | ✅ | Starts a live session, returns a `sessionId`. | `{ "sessionId": "abc123", "joinUrl": "..." }` |
| `GET` | `/session/:sessionId/analytics` | ✅ | Real‑time analytics for the admin dashboard. | `{ "answersPerOption": {...}, "avgResponseTime": 12.3 }` |

All requests must include the `Authorization: Bearer <accessToken>` header unless otherwise noted.

---  

## Development  

### Setting Up the Development Environment  

```bash
npm install          # install dependencies
npm run dev          # start Vite dev server
```

### Testing  

```bash
npm run test         # runs Vitest unit & integration tests
npm run test:watch   # watch mode
```

### Linting & Formatting  

```bash
npm run lint         # Runs ESLint across the src folder
npm run format       # Runs Prettier (if added)
```

### Debugging Tips  

- **Network tab** – inspect API calls and verify the `Authorization` header.  
- **JWT payload** – decode with `atob(token.split('.')[1])` (see `authContext.jsx`).  
- **Socket.io events** – logged in `AdminLiveSession.jsx`; add `console.log` to view emitted/received messages.  

---  

## Deployment  

### Docker (multi‑stage)  

```dockerfile
# Dockerfile (place in repo root)

# ---------- Builder ----------
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ARG VITE_BACKEND_URL
ARG VITE_SOCKET_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
ENV VITE_SOCKET_URL=$VITE_SOCKET_URL
RUN npm run build

# ---------- Production ----------
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build & run (replace env vars with your production values):

```bash
docker build \
  --build-arg VITE_BACKEND_URL=https://quizidy-backend.duckdns.org \
  --build-arg VITE_SOCKET_URL=wss://quizidy-backend.duckdns.org \
  -t quizfy .

docker run -p 8080:80 quizfy
```

### Static Hosting  

The `dist` folder can be deployed to any static‑file host (Vercel, Netlify, GitHub Pages, Cloudflare Pages). Ensure the `VITE_BACKEND_URL` (and optionally `VITE_SOCKET_URL`) environment variable is set in the hosting platform’s settings.

### Production Environment Variables  

| Variable | Description |
|----------|-------------|
| `VITE_BACKEND_URL` | Base URL of the backend API (must be reachable from the client). |
| `VITE_SOCKET_URL` (optional) | WebSocket endpoint for real‑time communication. |
| `VITE_PORT` (optional) | Port for the Vite preview server (used only locally). |

---  

## Contributing  

We welcome contributions! Please follow these steps:

1. **Fork** the repository and **clone** your fork.  
2. Create a feature branch: `git checkout -b feat/awesome-feature`.  
3. Install dependencies (`npm install`).  
4. Make your changes, ensuring the app still builds (`npm run dev`).  
5. Run the test suite: `npm run test`. All new logic should be covered.  
6. Run the linter: `npm run lint`. Fix any warnings/errors.  
7. Commit with a clear message: `git commit -m "feat: add awesome feature"`  
8. Push to your fork and open a **Pull Request** against `main`.  

### Development Workflow  

- Pull Requests must pass the CI lint and test steps.  
- Add unit/integration tests for new logic (Vitest recommended).  
- Update the **README** if you add public‑facing features or change setup steps.  

### Code Review Guidelines  

- Keep components small and focused.  
- Prefer functional components with hooks.  
- Use TypeScript in future iterations for stronger typing.  
- Document any new API endpoints in the **API Documentation** section.  

---  

## License  

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.  

---  

## Acknowledgments  

- **React**, **Vite**, **TailwindCSS** – for the excellent developer experience.  
- **OpenAI** & **Google Gemini** – powering the AI quiz generation.  
- **Socket.io** – enabling real‑time live sessions.  
- All contributors who have helped shape Quizfy.  