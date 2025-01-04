from sqlalchemy.orm import Session  # Add this import
from app.utils.model_loader import load_model
from app.schemas.rice_recommendation_schema import RiceRecommendationBase, RiceRecommendationResponse
import pandas as pd

# Load the trained rice variety prediction model
variety_model = load_model("app/train_model/variety_model.pkl")

def get_rice_varieties(db: Session, province: str, district: str, age_group: float) -> RiceRecommendationResponse:
    try:
        # Prepare the input data for the model using the province, district, and age_group
        new_data = pd.DataFrame([{
            'Province': province,
            'District': district,
            'Age Group': age_group,  # Use the numeric value for age group (e.g., 3.5)
        }])

        # Predict the rice varieties using the model
        predicted_varieties = variety_model.predict(new_data)

        # Return the predicted rice varieties in the response
        return RiceRecommendationResponse(rice_variety=predicted_varieties.tolist())
    
    except Exception as e:
        raise Exception(f"Error predicting rice varieties: {str(e)}")
