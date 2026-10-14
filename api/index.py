"""
Vercel Serverless Function entry point for MACHINE GAURD AI.
Provides serverless REST API endpoints for Vercel deployment.
"""
import os
import sys
import shutil
from pathlib import Path

# Add project root to sys.path
ROOT_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT_DIR))

# Serverless environment configuration
os.environ["APP_ENV"] = "production"
os.environ["KAFKA_ENABLED"] = "false"

# On AWS Lambda / Vercel Serverless, working directory is read-only.
# Copy SQLite database to /tmp if using SQLite
tmp_db = Path("/tmp/isaac.db")
src_db = ROOT_DIR / "isaac.db"
if src_db.exists() and not tmp_db.exists():
    try:
        shutil.copyfile(src_db, tmp_db)
    except Exception:
        pass

if tmp_db.exists():
    os.environ["SQLITE_DB_PATH"] = "/tmp/isaac.db"

try:
    from backend.app.main import app
except Exception as exc:
    # Safe lightweight fallback if dependencies are still initializing
    from fastapi import FastAPI
    from fastapi.middleware.cors import CORSMiddleware
    
    app = FastAPI(title="MACHINE GAURD AI - Serverless Gateway")
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    @app.get("/api/health")
    def health():
        return {
            "status": "healthy",
            "service": "MACHINE GAURD AI Serverless API",
            "version": "1.0.0",
            "mode": "serverless",
        }
