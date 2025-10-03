class SharkHabitatPredictor:
    def __init__(self):
        self.model = None
        self.feature_importance = None
        # Add eddy detector to initialization
        self.eddy_detector = None
    
    def build_model(self):
        # your existing code
        pass
    
    def train(self, features, labels):
        # your existing code
        pass
    
    def predict(self, satellite_data):
        # your existing code
        pass
    
    # ✅ ADD THIS NEW METHOD INSIDE THE CLASS ✅
    def add_eddy_features(self, satellite_data, eddy_data):
        """
        Add eddy-related features to satellite data
        Based on research: sharks prefer warm eddies for foraging
        """
        satellite_data['eddy_presence'] = eddy_data['total_eddies'] > 0
        satellite_data['warm_eddy_count'] = len(eddy_data['warm_eddies'])
        satellite_data['cold_eddy_count'] = len(eddy_data['cold_eddies'])
        satellite_data['total_eddies_nearby'] = eddy_data['total_eddies']
        
        # Add eddy kinetic energy if available
        if 'eddy_kinetic_energy' in eddy_data:
            satellite_data['eke_mean'] = np.mean(eddy_data['eddy_kinetic_energy'])
        
        print(f"✅ Added eddy features: {eddy_data['total_eddies']} eddies detected")
        return satellite_data
