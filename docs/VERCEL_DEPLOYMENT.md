# Deploying MACHINE GAURD AI (I.S.A.A.C.) to Vercel

This guide provides end-to-end instructions for deploying the **MACHINE GAURD AI** frontend application to **Vercel**, connecting it to your FastAPI backend, and avoiding common pitfalls (such as CORS errors, Mixed Content blocking, and 404s on page refresh).

---

## 1. Architecture Overview

```mermaid
flowchart LR
    subgraph Vercel ["Vercel Global Edge Network"]
        direction TB
        ViteSPA["React + Vite Dashboard<br/>(SPA Bundle)"]
        VercelCDN["Vercel Edge CDN & SSL"]
    end

    subgraph BackendHost ["Backend Host (Render / Railway / Fly.io / AWS)"]
        direction TB
        FastAPI["FastAPI REST API (:8000)"]
        WebSocket["WebSocket Telemetry Stream (:8000/ws/telemetry)"]
        ML["ML Inference Engine & Asset Controller"]
        DB[(MySQL / SQLite Database)]
    end

    UserBrowser["Operator Browser (HTTPS)"] -->|Static UI Assets| VercelCDN
    VercelCDN --> ViteSPA
    UserBrowser -->|REST API Requests (HTTPS)| FastAPI
    UserBrowser -->|Live Sensor Telemetry (WSS)| WebSocket
    FastAPI --> DB
    FastAPI --> ML
```

### Why Deploy Frontend on Vercel?
- **Global CDN & Ultra-Fast Loading**: Vite static bundles are cached on Vercel's global edge network.
- **Automated Previews & CI/CD**: Automatic preview deployments on pull requests and branch pushes.
- **Zero Server Maintenance**: Serverless static hosting with free automatic HTTPS/SSL certificates.
- **Persistent Backend Separation**: The FastAPI backend handles continuous machine learning inference, real-time WebSocket streams, database transactions, and sensor replay loops on persistent container/cloud infrastructure.

---

## 2. Pre-Configured Vercel Files in this Repository

The repository is already configured with two production-ready Vercel configuration files:

1. **Root Configuration ([`vercel.json`](file:///c:/Users/DELL/OneDrive/Desktop/MACHINE%20GAURD%20AI/vercel.json))**:
   Used when deploying the repository from its root:
   ```json
   {
     "$schema": "https://openapi.vercel.sh/vercel.json",
     "framework": "vite",
     "buildCommand": "cd frontend && npm install && npm run build",
     "outputDirectory": "frontend/dist",
     "cleanUrls": true,
     "rewrites": [
       {
         "source": "/(.*)",
         "destination": "/index.html"
       }
     ]
   }
   ```
2. **Frontend Subfolder Configuration ([`frontend/vercel.json`](file:///c:/Users/DELL/OneDrive/Desktop/MACHINE%20GAURD%20AI/frontend/vercel.json))**:
   Used if you select `frontend` as the **Root Directory** in Vercel project settings:
   ```json
   {
     "$schema": "https://openapi.vercel.sh/vercel.json",
     "framework": "vite",
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "cleanUrls": true,
     "rewrites": [
       {
         "source": "/(.*)",
         "destination": "/index.html"
       }
     ]
   }
   ```

> [!IMPORTANT]
> The `"rewrites": [{"source": "/(.*)", "destination": "/index.html"}]` rule is essential for Single Page Applications (SPA). It ensures that when you refresh or directly navigate to routes like `/machines`, `/analytics`, `/alerts`, or `/operations`, Vercel routes to `/index.html` instead of throwing a `404 Not Found`.

---

## 3. Step-by-Step Deployment Options

### Option A: Deploy via Vercel Web Dashboard (Recommended)

1. Push your repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Log into [vercel.com](https://vercel.com) and click **"Add New..."** → **"Project"**.
3. Import your **MACHINE GAURD AI** repository.
4. In the **Configure Project** screen:
   - **Framework Preset**: Vite
   - **Root Directory**:
     - *Default (`.`)*: Leave blank. Vercel automatically runs the root [`vercel.json`](file:///c:/Users/DELL/OneDrive/Desktop/MACHINE%20GAURD%20AI/vercel.json).
     - *Alternative (`frontend`)*: If you click **Edit** and set Root Directory to `frontend`, Vercel uses [`frontend/vercel.json`](file:///c:/Users/DELL/OneDrive/Desktop/MACHINE%20GAURD%20AI/frontend/vercel.json).
5. Expand **Environment Variables** and add:
   | Key | Value | Description |
   | :--- | :--- | :--- |
   | `VITE_API_BASE_URL` | `https://your-backend-domain.com` | Production URL of your FastAPI backend |
   | `VITE_WS_URL` | `wss://your-backend-domain.com/ws/telemetry` | *(Optional)* WebSocket URL (auto-derived if omitted) |
6. Click **Deploy**. Vercel will build and assign a production URL (e.g., `https://machine-guard-ai.vercel.app`).

---

### Option B: Deploy via Vercel CLI

1. Install the Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```
2. Authenticate:
   ```bash
   vercel login
   ```
3. Link and deploy from workspace root:
   ```bash
   vercel
   ```
4. Deploy to production:
   ```bash
   vercel --prod
   ```

---

## 4. Backend Configuration (CORS & Connectivity)

When your frontend runs on Vercel (`https://*.vercel.app`), your backend must allow incoming requests from that domain.

### Built-in Dynamic Vercel Domain Support
The backend is already configured with dynamic regular-expression matching for Vercel preview and production URLs:

In [`backend/app/config.py`](file:///c:/Users/DELL/OneDrive/Desktop/MACHINE%20GAURD%20AI/backend/app/config.py):
```python
cors_origin_regex: str = r"^https://.*\.vercel\.app$"
```

This ensures that:
- Production deployments (`https://machine-guard-ai.vercel.app`)
- Preview branch deployments (`https://machine-guard-ai-git-feature.vercel.app`)
- Team previews (`https://machine-guard-ai-user.vercel.app`)

...are **all automatically permitted** without needing to manually update CORS allowed origins on every deploy.

If you have a custom domain (e.g. `https://monitor.yourcompany.com`), add it to your backend's `.env`:
```env
CORS_ALLOWED_ORIGINS=https://monitor.yourcompany.com,http://localhost:5173
```

---

## 5. Hosting the FastAPI Backend

Because MACHINE GAURD AI includes:
- **WebSocket Streaming (`/ws/telemetry`)**: Constant live connection to industrial sensor simulator.
- **Relational Storage**: MySQL or SQLite database.
- **ML Classifiers**: Scikit-Learn and XGBoost failure modes predictor.

The backend should be hosted on a persistent container or VM platform:

| Platform | Recommended Plan | Setup Summary |
| :--- | :--- | :--- |
| **Railway** | Starter / Pro | Connect repo → Deploy `Dockerfile.backend` → Set env vars |
| **Render** | Web Service | Build: `pip install -r backend/requirements.txt`, Start: `uvicorn backend.app.main:app --host 0.0.0.0 --port 10000` |
| **Fly.io** | 1 Shared CPU, 1GB RAM | `fly launch` using `Dockerfile.backend` |
| **AWS ECS / EC2** | t3.small / t3.medium | Run `docker-compose up -d` or ECS Fargate task |

---

## 6. Pre-Flight Verification Checklist

Before and after deployment, confirm:

- [x] **Root vercel.json exists** with valid schema and SPA rewrites (`source: "/(.*)"`, `destination: "/index.html"`).
- [x] **frontend/vercel.json exists** as a fallback for subfolder deployments.
- [x] **No invalid `"services"` key** in `vercel.json` (Vercel uses static/serverless specifications).
- [x] **Accidental 0-byte `vercel` file removed**.
- [x] **Frontend builds cleanly**: `cd frontend && npm run build` compiles with zero errors.
- [x] **Automated tests pass**: All 30 frontend tests pass via `npm test`.
- [x] **CORS Origin Regex active**: Backend permits `https://*.vercel.app` via Starlette `CORSMiddleware`.
- [x] **Secure WebSocket fallback**: Protocol transitions smoothly between `ws://` in local development and `wss://` in production.
- [x] **`.vercel` directory added to `.gitignore`**.

---

## 7. Troubleshooting Common Issues

### Issue 1: "404 Not Found" when refreshing `/machines` or other subpages
- **Cause**: Vercel tries to find a static file named `machines/index.html`.
- **Solution**: The `rewrites` block in `vercel.json` routes all requests back to `/index.html`, where React router dynamically renders the requested view.

### Issue 2: "Mixed Content" error in browser console
- **Cause**: Vercel serves the frontend over `https://`, but `VITE_API_BASE_URL` points to an insecure `http://` backend URL.
- **Solution**: Ensure your backend uses an HTTPS URL (Render, Railway, and Fly.io provide automatic HTTPS for free).

### Issue 3: "Network Error: Backend service unavailable"
- **Cause**: `VITE_API_BASE_URL` was not set in Vercel project environment variables, or the backend service is asleep/inactive.
- **Solution**: Go to **Vercel Dashboard → Project Settings → Environment Variables**, add `VITE_API_BASE_URL=https://your-backend-host.com`, and click **Redeploy**.
