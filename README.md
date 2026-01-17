# Quizfy – AI‑Powered Quiz Builder & Live Session Platform  

![Quizfy Logo](./src/assets/Images/Logo/LOGO.png)

[![Vite Build](https://img.shields.io/badge/Vite-5.2.0-blue?logo=vite)](https://vitejs.dev)  
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://reactjs.org)  
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.2.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com)  
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)  
[![Node.js](https://img.shields.io/badge/Node-%3E%3D18.0.0-success?logo=node.js)](https://nodejs.org)  
[![CI](https://github.com/GURUDAS-DEV/AI-Based-Quiz-Builder-Quizfy-/actions/workflows/ci.yml/badge.svg)](https://github.com/GURUDAS-DEV/AI-Based-Quiz-Builder-Quizfy-/actions)  
[![Docker](https://img.shields.io/badge/Docker-%20-%230db7ed?logo=docker)](https://hub.docker.com/r/quizfy)  
[![Version](https://img.shields.io/badge/Version-1.9.0-blue.svg)](https://github.com/GURUDAS-DEV/AI-Based-Quiz-Builder-Quizfy-/releases/tag/v1.9.0)  

**Live demo** | **Documentation** | **Issues**  
---|---|---  
[🚀 Demo (hosted)](https://quizfy-demo.vercel.app) | [📚 Docs (this file)](#usage) | [🐞 Report a bug](https://github.com/GURUDAS-DEV/AI-Based-Quiz-Builder-Quizfy-/issues)  

---  

## Overview  

Quizfy is a modern web application that enables educators, corporate trainers, and event organizers to **create AI‑generated quizzes in seconds** and **run real‑time live quiz sessions** with participants. The frontend is built with **React 19**, **Vite 5**, and **TailwindCSS**, while a Node/Express backend (hosted at `https://quizidy-backend.duckdns.org`) provides authentication, OpenAI/Google Gemini‑driven question generation, and Socket.io‑based live interaction.

*Target audience*: teachers, corporate trainers, event organizers, and anyone who wants to run interactive quizzes without manual question authoring.  

*Current version*: `1.9.0` (stable).  

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
| **Multilingual Support** | Generate quizzes in multiple languages using the underlying LLMs. | 🧪 Experimental |
| **AI‑Powered Quiz Analytics** | Advanced insights such as difficulty‑based heatmaps and participant engagement metrics. | 🧪 Experimental |
| **Quiz Templates** | Pre‑defined quiz structures (e.g., True/False, Fill‑in‑the‑Blank) that can be saved and reused. | ✅ Stable |
| **Quiz Scheduler** | Schedule quizzes to be automatically launched at a future date/time. | ✅ Stable |
| **Quiz Scheduler – Recurring Sessions** | New in v1.9.0 – ability to set recurring (daily/weekly) sessions. | 🧪 Experimental |
| **AI‑Generated Explanations** | Auto‑generate detailed answer explanations for each question. | ✅ Stable |

---  

## Tech Stack  

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Framework** | React 19 (`react-router@7`) | UI rendering & routing |
| **Bundler / Dev Server** | Vite 5.2 | Fast HMR & production builds |
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
| **Containerisation** | Docker (multi‑stage) | Consistent production builds |
| **Deployment** | `serve`, Docker, Vercel (frontend) | Production static serving |

---  

## Installation  

### Prerequisites  

| Tool | Minimum version |
|------|-----------------|
| Node.js | 18.x |
| npm (or Yarn) | 9.x |
| Git | any recent version |
| (Optional) Docker | 20.x |

### Steps  

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

# (Optional) Socket.io endpoint if it differs from the backend URL
VITE_SOCKET_URL=wss://quizidy-backend.duckdns.org

# Enable recurring scheduler (true/false) – new in v1.9.0
VITE_ENABLE_RECURRING_SCHEDULER=false
```

> **Tip:** The backend must allow CORS for `http://0.0.0.0:5173` (or the port you set).  

### Running the App (development)  

```bash
npm run dev
# → Vite binds to 0.0.0.0:5173 (strictPort). Open http://localhost:5173
```

> **Note:** Because `strictPort: true` is enabled, Vite will **fail** to start if port 5173 is already in use. Adjust the port in `vite.config.js` if needed.  

### Building for Production  

```bash
npm run build          # Generates ./dist
npm run preview        # Serves the built files locally (uses `serve`)
```

### Docker (optional)  

```bash
# Build the image
docker build -t quizfy:1.9.0 .

# Run the container (exposes port 80 inside the container)
docker run -d -p 8080:80 --name quizfy quizfy:1.9.0
```

> The container serves the static `dist` folder using `serve`. Ensure you have built the assets first (`npm run build`).  

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

### 3️⃣ Use Quiz Templates  

- From the **Create Quiz** screen, select **“Use Template”** to pick a pre‑defined structure (e.g., True/False).  
- The template populates the question list, which you can edit or extend via AI.  

### 4️⃣ Schedule a Quiz (new in v1.9.0)  

1. Open **“Schedule Quiz”** from the dashboard.  
2. Choose a saved quiz, set a **date & time**, and optionally enable **recurring** (daily/weekly).  
3. Save – the backend will automatically launch the session at the specified time and send the join URL to participants via email (if configured).  

### 5️⃣ Run a Live Session (Admin)  

1. From the dashboard, select a saved (or scheduled) quiz and click **“Go Live”**.  
2. Share the generated session link with participants.  
3. Use the admin toolbar to **advance questions**, **view analytics**, **open polls**, or **send messages**.  

### 6️⃣ Participate  

- Participants join via the shared link, enter a display name, and answer questions in real time.  
- Immediate feedback (correct/incorrect) is shown with confetti for right answers.  

### 7️⃣ Review Results  

- After the session ends, the admin can download a CSV of all responses or view a summary chart (Bar, Pie, Donut).  
- Advanced AI‑powered analytics (heatmaps, difficulty curves) are now available under **“Insights”**.  

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
| `GET` | `/analytics/advanced/:sessionId` | ✅ | Returns AI‑powered analytics such as difficulty‑based heatmaps and participant engagement metrics. | `{ "heatmap": {...}, "engagementScore": 87 }` |
| `GET` | `/templates` | ✅ | Retrieves the list of available quiz templates. | `{ "templates": [{ "id": "tmpl1", "name": "True/False", "structure": [...] }] }` |
| `POST` | `/templates/:id/apply` | ✅ | Applies a selected template to a new quiz draft. | `{ "draftId": "draft123", "questions": [...] }` |
| `POST` | `/schedule` | ✅ | Schedules a quiz to be launched at a future date/time. Supports recurrence flags. | `{ "scheduleId": "sch789", "status": "scheduled" }` |
| `GET` | `/schedule/:scheduleId` | ✅ | Retrieves schedule details, including next run time and recurrence pattern. | `{ "scheduleId": "sch789", "nextRun": "2026-02-01T10:00:00Z", "recurrence": "weekly" }` |

All requests must include the `Authorization: Bearer <accessToken>` header unless otherwise noted.

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

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Lint code
npm run lint
```

### Code Style  

- **ESLint** + **Prettier** are enforced.  
- Use functional components and React Hooks.  
- Keep JSX tidy; extract reusable UI pieces into the `src/Components/` folder.  

### Debugging Tips  

- **Network tab** – inspect API calls and verify the `Authorization` header.  
- **JWT payload** – decode with `atob(token.split('.')[1])` (see `authContext.jsx`).  
- **Socket.io events** – logged in `AdminLiveSession.jsx`; add `console.log` to view emitted/received messages.  
- **Docker logs** – `docker logs -f quizfy` to view runtime errors.  

---  

## License & Credits  

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.  

**Contributors**  

- Gurudas Bhardwaj – Project lead & core development  
- (Add additional contributors as they join)  

**Acknowledgments**  

- OpenAI & Google Gemini for the underlying language models.  
- The React, Vite, and TailwindCSS communities for excellent tooling.  
- Chart.js, Socket.io, and Redis teams for robust real‑time capabilities.  

---  