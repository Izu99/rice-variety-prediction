from pydantic import BaseModel
from typing import List, Optional

class PaddyVarietyBase(BaseModel):
    province: str
    district: str
    age_group: str

class PaddyVarietyResponse(BaseModel):
    paddy_varieties: List[str]

    class Config:
        from_attributes = True
