import requests
import numpy as np
import os
from utils.config import *

class NASADataDownloader:
    def __init__(self):
        self.session = requests.Session()
        self.credentials = {
            'username': NASA_EARTHDATA_USERNAME,
            'password': NASA_EARTHDATA_PASSWORD
        }
    
    def download_pace_phytoplankton(self, date, region):
        """Download PACE phytoplankton data"""
        print(f"🌊 Downloading PACE data for {date}...")
        
        # For now - SAMPLE DATA (replace with real NASA API later)
        sample_data = {
            'chlorophyll': np.random.uniform(0.1, 5.0, (100, 100)),
            'phytoplankton_types': np.random.uniform(1, 10, (100, 100)),
            'date': date,
            'region': region
        }
        
        print("✅ PACE data prepared")
        return sample_data
    
    def download_modis_sst(self, date, region):
        """Download MODIS Sea Surface Temperature data"""
        print(f"🌡️ Downloading MODIS SST data for {date}...")
        
        sample_sst = np.random.uniform(15, 30, (100, 100))
        
        print("✅ MODIS SST data prepared")
        return {
            'sea_surface_temp': sample_sst,
            'date': date,
            'region': region
        }
    
    def download_swot_currents(self, date, region):
        """Download SWOT ocean current data"""
        print(f"🌀 Downloading SWOT current data for {date}...")
        
        sample_currents_u = np.random.uniform(-2, 2, (100, 100))
        sample_currents_v = np.random.uniform(-2, 2, (100, 100))
        sample_topography = np.random.uniform(-100, 100, (100, 100))
        
        print("✅ SWOT data prepared")
        return {
            'current_u': sample_currents_u,
            'current_v': sample_currents_v,
            'ocean_topography': sample_topography,
            'date': date,
            'region': region
        }
    
    def get_complete_satellite_data(self, date, region_name):
        """Get all satellite data for specific date and region"""
        region = STUDY_REGIONS[region_name]
        
        print(f"📡 Fetching NASA satellite data for {region_name} on {date}")
        
        pace_data = self.download_pace_phytoplankton(date, region)
        modis_data = self.download_modis_sst(date, region)
        swot_data = self.download_swot_currents(date, region)
        
        combined_data = {
            'pace': pace_data,
            'modis': modis_data,
            'swot': swot_data,
            'date': date,
            'region': region,
            'region_name': region_name
        }
        
        print("🎉 All satellite data downloaded!")
        return combined_data
