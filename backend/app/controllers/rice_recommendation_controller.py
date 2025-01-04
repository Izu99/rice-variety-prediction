from sqlalchemy.orm import Session
from app.models.rice_recommendation_model import RiceVariety
from app.schemas.rice_recommendation_schema import RiceVarietyBase, RiceVarietyResponse

def get_rice_varieties(db: Session, province: str, district: str, age_group: str) -> RiceVarietyResponse:
    try:
        result = (
            db.query(RiceVariety)
            .filter(RiceVariety.province == province)
            .filter(RiceVariety.district == district)
            .filter(RiceVariety.age_group == age_group)
            .first()
        )

        if not result:
            return RiceVarietyResponse(rice_varieties=[])

        varieties = result.rice_variety.split(",")  # Split comma-separated varieties
        return RiceVarietyResponse(rice_varieties=varieties)
    except Exception as e:
        raise Exception(f"Error fetching rice varieties: {str(e)}")