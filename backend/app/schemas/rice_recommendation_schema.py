from pydantic import BaseModel
from typing import List, Optional

class RiceVarietyBase(BaseModel):
    province: str
    district: str
    age_group: str

class RiceVarietyResponse(BaseModel):
    rice_varieties: List[str]

    class Config:
        from_attributes = True