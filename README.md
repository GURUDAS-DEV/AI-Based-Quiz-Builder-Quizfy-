# Quizfy – AI‑Powered Quiz Builder & Live Session Platform  

![Quizfy Logo](./src/assets/Images/Logo/LOGO.png)

[![Vite Build](https://img.shields.io/badge/Vite-5.2.0-blue?logo=vite)](https://vitejs.dev)  
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://reactjs.org)  
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.2.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com)  
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)  
[![Node.js](https://img.shields.io/badge/Node-%3E%3D18.0.0-success?logo=node.js)](https://nodejs.org)  
[![CI](https://github.com/GURUDAS-DEV/AI-Based-Quiz-Builder-Quizfy-/actions/workflows/ci.yml/badge.svg)](https://github.com/GURUDAS-DEV/AI-Based-Quiz-Builder-Quizfy-/actions)  
[![Docker](https://img.shields.io/badge/Docker-%20-%230db7ed?logo=docker)](https://hub.docker.com/r/quizfy)  
[![Version](https://img.shields.io/badge/Version-1.11.0-blue.svg)](https://github.com/GURUDAS-DEV/AI-Based-Quiz-Builder-Quizfy-/releases/tag/v1.11.0)  

**Live demo** | **Documentation** | **Issues**  
---|---|---  
[🚀 Demo (hosted)](https://quizfy-demo.vercel.app) | [📚 Docs (this file)](#usage) | [🐞 Report a bug](https://github.com/GURUDAS-DEV/AI-Based-Quiz-Builder-Quizfy-/issues)  

---  

## Overview  

Quizfy is a modern web application that enables educators, corporate trainers, and event organizers to **create AI‑generated quizzes in seconds** and **run real‑time live quiz sessions** with participants. The frontend is built with **React 19**, **Vite 5**, and **TailwindCSS**, while a Node/Express backend (hosted at `https://quizidy-backend.duckdns.org`) provides authentication, OpenAI/Google Gemini‑driven question generation, and Socket.io‑based live interaction.

*Target audience*: teachers, corporate trainers, event organizers, and anyone who wants to run interactive quizzes without manual question authoring.  

*Current version*: `1.11.0` (stable).  

---  

## Features  

| Feature | Description | Status |
|---------|-------------|--------|
| **AI‑Generated Quiz** | Uses Google Gemini / OpenAI to generate questions, multiple‑choice options, and detailed explanations. | ✅ Stable |
| **AI Quiz Review & Edit** | UI for admins to preview, edit, reorder, and enrich generated questions before saving. | ✅ Stable |
| **AI‑Generated Hints** *(new)* | Auto‑creates helpful hints for each question to aid participants during live sessions. | ✅ Stable |
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
| **Quiz Scheduler – Recurring Sessions** | Ability to set recurring (daily/weekly) sessions – now stable in v1.11.0. | ✅ Stable |
| **AI‑Generated Explanations** | Auto‑generate detailed answer explanations for each question. | ✅ Stable |

---  

## Tech Stack  

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Framework** | React 19 (`react-router@7`) | UI rendering & routing |
| **Bundler / Dev Server** | Vite 5.2 | Fast HMR & production builds |
| **Styling** | TailwindCSS 4, PostCSS, Autoprefixer | Utility‑first responsive design |
| **Icons** | `lucide-react`, `react-icons`, `@flaticon/flaticon-uicons` | Consistent SVG icon set |
| **AI** | `@google/genai`, `openai` | Generate quiz content & hints |
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
| (Optional) `serve` CLI | `npm i -g serve` |

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

Create a `.env` file in the project root (copy from the example) and fill in the required values:

```dotenv
VITE_BACKEND_URL=https://quizidy-backend.duckdns.org
VITE_OPENAI_API_KEY=your-openai-key
VITE_GOOGLE_GEMINI_API_KEY=your-gemini-key
VITE_SOCKET_IO_URL=https://quizidy-backend.duckdns.org
# Optional: adjust request timeout (ms)
VITE_API_TIMEOUT=15000
```

> **Note**: The backend URL and API keys are mandatory for AI‑generated content, hints, and live sessions.

---  

## Usage  

### Development (Hot‑Reload)  

```bash
npm run dev
# or
yarn dev
```

Open `http://localhost:5173` in your browser. Vite will automatically reload the page when you edit source files.

### Building for Production  

```bash
npm run build
# or
yarn build
```

The compiled, minified assets are emitted to the `dist/` directory.

### Previewing the Production Build Locally  

```bash
npm run preview
# or
yarn preview
```

A lightweight static server (powered by Vite) starts on `http://localhost:4173`.

### Running the Built App with `serve`  

```bash
# Install the static server globally if you haven't already
npm i -g serve

# Serve the `dist` folder
serve -s dist
```

The app will be available at `http://localhost:3000` (or the port shown in the console).

---  

## Development  

| Task | Command |
|------|---------|
| **Run tests** | `npm test` (or `yarn test`) |
| **Lint** | `npm run lint` |
| **Format** | `npm run format` |
| **Check TypeScript (if added later)** | `npm run tsc` |

### Code Structure Overview  

```
src/
├── Components/
│   ├── AI_Features_page/      # AI generation UI (now includes hints)
│   ├── Authentications/       # Login / Register flows
│   ├── Footer/
│   ├── Landing/
│   ├── Loader/
│   ├── Messages/
│   ├── Navbar/
│   ├── Protected_Route/
│   └── User/
├── Context/
│   └── authContext.jsx        # React Context for auth state
├── Layout.jsx                 # Global layout wrapper
├── assets/
│   ├── Images/                # Logos, illustrations
│   └── fonts/                 # Custom font files
├── main.jsx                   # Application entry point
└── style.css                  # Global Tailwind imports
```

The `dist/` folder contains the compiled assets (JS bundles, images, fonts, etc.) generated by the latest build. **Do not edit** anything inside `dist/`; it is recreated on each `npm run build`.

---  

## Deployment  

### Docker (Recommended for Production)  

A multi‑stage Dockerfile is included in the repository.

```bash
# Build the Docker image
docker build -t quizfy:1.11.0 .

# Run the container
docker run -d -p 8080:80 --name quizfy \
  -e VITE_BACKEND_URL=https://quizidy-backend.duckdns.org \
  -e VITE_OPENAI_API_KEY=your-openai-key \
  -e VITE_GOOGLE_GEMINI_API_KEY=your-gemini-key \
  -e VITE_SOCKET_IO_URL=https://quizidy-backend.duckdns.org \
  quizfy:1.11.0
```

The container serves the static files from `dist/` using an Nginx server (configured in the Dockerfile). The app will be reachable at `http://localhost:8080`.

### Vercel (Frontend‑only)  

1. Push the repository to GitHub.  
2. Connect the repo to Vercel and select the **`npm run build`** command.  
3. Set the required environment variables (`VITE_BACKEND_URL`, `VITE_OPENAI_API_KEY`, `VITE_GOOGLE_GEMINI_API_KEY`, `VITE_SOCKET_IO_URL`, `VITE_API_TIMEOUT`) in the Vercel dashboard.  

Vercel will automatically build and deploy the `dist/` folder on every push to the `main` branch.

### Traditional Static Hosting  

Upload the contents of the `dist/` folder to any static file host (Netlify, GitHub Pages, AWS S3 + CloudFront, etc.). Ensure the host rewrites all routes to `index.html` for client‑side routing to work.

---  

## API Documentation  

Quizfy’s **frontend** communicates with a separate backend service (`https://quizidy-backend.duckdns.org`). The backend exposes the following key endpoints (refer to the backend repository for the full OpenAPI spec):

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `POST` | `/api/auth/login` | Returns JWT access & refresh tokens. | ❌ |
| `POST` | `/api/auth/register` | Creates a new user account. | ❌ |
| `GET` | `/api/quizzes/generate` | Generates a quiz (and optional hints) using the selected LLM. Query params: `topic`, `language`, `numQuestions`, `includeHints`. | ✅ |
| `POST` | `/api/quizzes` | Persists a generated or manually created quiz. | ✅ |
| `GET` | `/api/quizzes/:id` | Retrieves a quiz definition (questions, options, explanations, hints). | ✅ |
| `POST` | `/api/sessions/start` | Starts a live session for a given quiz ID. Returns a session token. | ✅ |
| `POST` | `/api/sessions/:sessionId/answer` | Submits a participant’s answer. | ✅ |
| `GET` | `/api/sessions/:sessionId/results` | Fetches real‑time results for the admin dashboard. | ✅ |
| `POST` | `/api/sessions/:sessionId/raise-hand` | Participant raises hand for Q&A. | ✅ |
| `GET` | `/api/sessions/:sessionId/participants` | Lists participants and their statuses. | ✅ |
| `GET` | `/api/sessions/:sessionId/hints` | Retrieves generated hints for the current question (new endpoint). | ✅ |

**Authentication** – All protected routes require an `Authorization: Bearer <access_token>` header. Tokens are refreshed automatically by the frontend using the `/api/auth/refresh` endpoint.

---  

## Contributing  

We welcome contributions! Please follow these steps:

1. **Fork** the repository and create a new branch for your feature or bug‑fix.  
   ```bash
   git checkout -b feature/awesome-feature
   ```
2. **Install** the project locally (see *Installation* above).  
3. **Make your changes** and ensure the code passes linting and tests.  
   ```bash
   npm run lint
   npm test
   ```
4. **Commit** with a clear message following the Conventional Commits format.  
5. **Push** to your fork and open a **Pull Request** against the `main` branch.  
6. Fill out the PR template, linking any related issues.  

### Development Workflow  

| Step | Command |
|------|---------|
| **Start dev server** | `npm run dev` |
| **Run unit tests** | `npm test` |
| **Run end‑to‑end tests** (if added) | `npm run e2e` |
| **Check code style** | `npm run lint` |
| **Format files** | `npm run format` |

### Code Style  

- **Prettier** is enforced on all `.js/.jsx/.css` files.  
- **ESLint** rules are based on the Airbnb React style guide with additional React‑hooks checks.  
- Use **functional components** and **React Hooks** exclusively; avoid class components.  

---  

## Troubleshooting  

| Issue | Solution |
|-------|----------|
| **Cannot connect to backend** | Verify that `VITE_BACKEND_URL` points to a reachable server and that CORS is enabled on the backend. |
| **AI generation returns 401** | Ensure your OpenAI / Google Gemini API keys are valid and correctly set in `.env`. |
| **Live session not updating** | Check that the Socket.io client can reach the backend (`VITE_SOCKET_IO_URL`). Open the browser console for connection errors. |
| **Hints not appearing** | Confirm you are calling the `/api/quizzes/generate` endpoint with `includeHints=true` and that the backend version supports hints (v1.11.0+). |
| **Build fails with “module not found”** | Run `npm install` again to refresh the lockfile, then `npm run build`. |
| **Docker container returns 404** | Confirm that the `dist/` folder exists (run `npm run build` before building the image). |
| **Environment variable `VITE_API_TIMEOUT` ignored** | Restart the dev server after changing `.env` values (`npm run dev`). |

For additional help, open an issue or join the discussion in the **#questions** channel of the repository.

---  

## License & Credits  

**License:** MIT – see the [LICENSE](LICENSE) file