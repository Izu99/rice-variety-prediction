from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.rice_recommendation import router as rice_recommendation_router
from app.utils.database import engine, Base

# Initialize database tables
Base.metadata.create_all(bind=engine)

# Create FastAPI app
app = FastAPI()

# Add CORSMiddleware to allow requests from the Vite dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite dev server running on this port
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Add routes
app.include_router(rice_recommendation_router, prefix="/rice-variety", tags=["rice Variety"])

# Run app on port 8000
# Command: `uvicorn app.main:app --reload`
