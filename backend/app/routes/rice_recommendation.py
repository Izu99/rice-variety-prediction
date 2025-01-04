from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.utils.database import get_db
from app.controllers.rice_recommendation_controller import get_rice_varieties
from app.schemas.rice_recommendation_schema import RiceVarietyBase

router = APIRouter()

@router.post("/get-varieties")
async def fetch_rice_varieties(data: RiceVarietyBase, db: Session = Depends(get_db)):
    try:
        response = get_rice_varieties(db, data.province, data.district, data.age_group)
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching rice varieties: {str(e)}")