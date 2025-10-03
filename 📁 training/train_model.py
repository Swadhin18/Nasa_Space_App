import pandas as pd
import numpy as np
from shark_predictor import SharkHabitatPredictor
from data_downloader import NASADataDownloader
from config import FEATURE_COLUMNS, STUDY_REGIONS

def prepare_training_data(satellite_data):
    """Convert satellite data to ML features"""
    features = []
    
    pace = satellite_data['pace']
    modis = satellite_data['modis'] 
    swot = satellite_data['swot']
    
    feature_vector = [
        np.mean(modis['sea_surface_temp']),
        np.mean(pace['chlorophyll']),
        np.std(swot['current_u']),
        np.mean(swot['ocean_topography']),
        np.mean(pace['phytoplankton_types']),
        np.max(swot['current_u'])
    ]
    
    features.append(feature_vector)
    return np.array(features)

def main():
    print("🚀 Starting NASA Data Integration...")
    
    nasa_downloader = NASADataDownloader()
    satellite_data = nasa_downloader.get_complete_satellite_data(
        date="2024-03-15",
        region_name="gulf_stream"
    )
    
    features = prepare_training_data(satellite_data)
    labels = np.random.randint(0, 2, len(features))
    
    print(f"📊 Training with {len(features)} NASA data samples")
    
    predictor = SharkHabitatPredictor()
    X_test, y_test = predictor.train(features, labels)
    
    test_predictions = predictor.predict(X_test)
    print(f"🎯 Made {len(test_predictions)} predictions")
    print("✅ NASA Data Integration Completed!")

if __name__ == "__main__":
    main()
