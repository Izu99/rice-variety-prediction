from sqlalchemy.orm import Session
from app.models.paddy_variety_model import PaddyVariety
from app.schemas.paddy_variety_schema import PaddyVarietyBase, PaddyVarietyResponse

def get_paddy_varieties(db: Session, province: str, district: str, age_group: str) -> PaddyVarietyResponse:
    try:
        result = (
            db.query(PaddyVariety)
            .filter(PaddyVariety.province == province)
            .filter(PaddyVariety.district == district)
            .filter(PaddyVariety.age_group == age_group)
            .first()
        )

        if not result:
            return PaddyVarietyResponse(paddy_varieties=[])

        varieties = result.paddy_variety.split(",")  # Split comma-separated varieties
        return PaddyVarietyResponse(paddy_varieties=varieties)
    except Exception as e:
        raise Exception(f"Error fetching paddy varieties: {str(e)}")
