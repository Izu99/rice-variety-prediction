from pydantic import BaseModel
from typing import List

class RiceRecommendationBase(BaseModel):
    province: str
    district: str
    age_group: float  # Age group as float to allow decimal values

    class Config:
        orm_mode = True

class RiceRecommendationResponse(BaseModel):
    rice_variety: List[str]  # List of predicted rice varieties

    class Config:
        orm_mode = True
