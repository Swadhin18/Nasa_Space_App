# NASA Data Configuration - REAL ENDPOINTS
NASA_EARTHDATA_USERNAME = "your_earthdata_username"  # Register at https://urs.earthdata.nasa.gov/
NASA_EARTHDATA_PASSWORD = "your_earthdata_password"

# REAL NASA DATA APIs
PACE_OCEAN_COLOR_API = "https://oceandata.sci.gsfc.nasa.gov/api/pace/level2"
MODIS_SST_API = "https://oceandata.sci.gsfc.nasa.gov/api/modis/level2"  
SWOT_ALTIMETRY_API = "https://podaac.jpl.nasa.gov/api/swot/"

# Data Products
SATELLITE_PRODUCTS = {
    'PACE': {
        'chlorophyll': 'PACE_OCI_L2_OC',
        'phytoplankton': 'PACE_OCI_L2_IOP',
        'base_url': 'https://oceandata.sci.gsfc.nasa.gov/ob/getfile/'
    },
    'MODIS_AQUA': {
        'sst': 'AQUA_MODIS.2025',
        'ocean_color': 'AQUA_MODIS.2025',
        'base_url': 'https://oceandata.sci.gsfc.nasa.gov/ob/getfile/'
    },
    'SWOT': {
        'sea_level': 'SWOT_L2_LR_SSH',
        'currents': 'SWOT_L2_LR_SSH',
        'base_url': 'https://podaac.jpl.nasa.gov/api/'
    }
}

# Regions of Interest (start with these test areas)
STUDY_REGIONS = {
    'gulf_stream': {'lat_min': 30, 'lat_max': 40, 'lon_min': -80, 'lon_max': -60},
    'california_coast': {'lat_min': 32, 'lat_max': 38, 'lon_min': -125, 'lon_max': -117},
    'great_barrier_reef': {'lat_min': -20, 'lat_max': -10, 'lon_min': 145, 'lon_max': 155}
}

# Feature columns for ML model
FEATURE_COLUMNS = [
    'sea_surface_temp',           # From MODIS/Aqua
    'chlorophyll_a',              # From PACE
    'eddy_kinetic_energy',        # From SWOT
    'current_velocity',           # From SWOT
    'phytoplankton_diversity',    # From PACE
    'ocean_topography'            # From SWOT
]

# Model parameters
MODEL_CONFIG = {
    'test_size': 0.2,
    'random_state': 42,
    'n_estimators': 100
}

# Shark species focus (based on research papers)
SHARK_SPECIES = [
    'great_white',
    'tiger_shark', 
    'hammerhead',
    'blue_shark',
    'mako_shark'
]

# ML Model Configuration
ML_SETTINGS = {
    'confidence_threshold': 0.7,
    'retrain_interval_days': 30,
    'max_training_samples': 10000
}

# API Rate Limits (requests per minute)
RATE_LIMITS = {
    'NASA_Oceancolor': 10,
    'PODAAC': 15,
    'Earthdata': 20
}
MODEL_CONFIG = {
    'test_size': 0.2,
    'random_state': 42,
    'n_estimators': 100
}
