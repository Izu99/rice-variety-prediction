from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.utils.database import get_db
from app.controllers.paddy_variety_controller import get_paddy_varieties
from app.schemas.paddy_variety_schema import PaddyVarietyBase

router = APIRouter()

@router.post("/get-varieties")
async def fetch_paddy_varieties(data: PaddyVarietyBase, db: Session = Depends(get_db)):
    try:
        response = get_paddy_varieties(db, data.province, data.district, data.age_group)
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching paddy varieties: {str(e)}")
