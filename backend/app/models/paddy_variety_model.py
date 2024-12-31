from sqlalchemy import Column, Integer, String, Text
from app.utils.database import Base

class PaddyVariety(Base):
    __tablename__ = "paddy_variety"

    id = Column(Integer, primary_key=True, index=True)
    province = Column(String(100), index=True)
    district = Column(String(100), index=True)
    age_group = Column(String(50), index=True)
    paddy_variety = Column(Text)  # To store comma-separated varieties
