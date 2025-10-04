# ml-predictor/predict.py
import sys
import os
import joblib
import numpy as np

def load_model():
    """Load the trained ML model"""
    try:
        model_path = os.path.join(os.path.dirname(__file__), 'shark_habitat_model.pkl')
        model_data = joblib.load(model_path)
        return model_data
    except Exception as e:
        print(f"Error loading model: {e}", file=sys.stderr)
        return None

def predict_habitat(lat, lon):
    """Predict shark habitat probability using ML model"""
    model_data = load_model()
    
    if model_data is None:
        return fallback_prediction(lat, lon)
    
    try:
        # Feature extraction (same way you used during training)
        sst = 20 + 10 * np.sin(lat * 0.1) * np.cos(lon * 0.1)
        chlorophyll = 0.5 + 0.5 * np.exp(-((lon + 70)**2 + (lat - 35)**2) / 50)
        sea_height = 0.1 * np.sin(lon * 0.5) * np.cos(lat * 0.5)
        
        features = np.array([[sst, chlorophyll, sea_height, lat, lon]])
        
        # Scale features if scaler exists
        if 'scaler' in model_data:
            features = model_data['scaler'].transform(features)
        
        # Predict probability
        probability = model_data['model'].predict_proba(features)[0][1]
        return float(probability)
        
    except Exception as e:
        print(f"Prediction error: {e}", file=sys.stderr)
        return fallback_prediction(lat, lon)

def fallback_prediction(lat, lon):
    """Fallback to rule-based prediction"""
    gulf_stream = 0.8 * np.exp(-((lat - 35) ** 2) / 15) * (1 if lon > -75 else 0.3)
    eddy1 = 0.7 * np.exp(-((lon + 72) ** 2 + (lat - 38) ** 2) / 25)
    eddy2 = 0.6 * np.exp(-((lon + 68) ** 2 + (lat - 32) ** 2) / 20)
    
    habitat = gulf_stream + eddy1 + eddy2
    return float(np.clip(habitat, 0, 1))

if __name__ == '__main__':
    try:
        lat = float(sys.argv[1])
        lon = float(sys.argv[2])
        result = predict_habitat(lat, lon)
        print(result)
    except Exception as e:
        fallback = fallback_prediction(35.0, -70.0)
        print(fallback)
