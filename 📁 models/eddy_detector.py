import numpy as np
from scipy import ndimage

class EddyDetector:
    """
    Detect ocean eddies using satellite data
    Based on research: 
    - Braun et al. 2019: Sharks use warm eddies as foraging conduits
    - Gaube et al. 2018: White shark movements in eddy systems
    """
    
    def __init__(self):
        self.eddy_types = ['warm_core', 'cold_core']
        self.min_eddy_size = 5  # km
        
    def detect_eddies_from_sst(self, sea_surface_temp, latitude, longitude):
        """
        Detect eddies from Sea Surface Temperature data (MODIS/Aqua)
        
        Args:
            sea_surface_temp: 2D array of temperature data
            latitude: 2D array of latitudes
            longitude: 2D array of longitudes
            
        Returns:
            Dictionary with eddy locations and properties
        """
        print("🔄 Detecting eddies from SST data...")
        
        # Smooth the temperature data to reduce noise
        smoothed_sst = ndimage.gaussian_filter(sea_surface_temp, sigma=1)
        
        # Calculate temperature gradients
        grad_y, grad_x = np.gradient(smoothed_sst)
        
        # Find warm core eddies (local maxima in temperature)
        warm_eddies = self._find_local_extrema(smoothed_sst, find_max=True)
        
        # Find cold core eddies (local minima in temperature)  
        cold_eddies = self._find_local_extrema(smoothed_sst, find_max=False)
        
        eddies_data = {
            'warm_eddies': self._characterize_eddies(warm_eddies, smoothed_sst, latitude, longitude, 'warm_core'),
            'cold_eddies': self._characterize_eddies(cold_eddies, smoothed_sst, latitude, longitude, 'cold_core'),
            'total_eddies': len(warm_eddies[0]) + len(cold_eddies[0])
        }
        
        print(f"✅ Found {eddies_data['total_eddies']} eddies "
              f"({len(eddies_data['warm_eddies'])} warm, {len(eddies_data['cold_eddies'])} cold)")
        
        return eddies_data
    
    def detect_eddies_from_altimetry(self, sea_level_anomaly, current_u, current_v):
        """
        Detect eddies from SWOT altimetry data (sea level anomalies and currents)
        
        Args:
            sea_level_anomaly: 2D array of sea level anomalies
            current_u: 2D array of eastward current velocity
            current_v: 2D array of northward current velocity
            
        Returns:
            Dictionary with eddy locations and kinematic properties
        """
        print("🔄 Detecting eddies from SWOT altimetry data...")
        
        # Calculate vorticity (rotation strength)
        vorticity = self._calculate_vorticity(current_u, current_v)
        
        # Calculate Eddy Kinetic Energy (EKE)
        eke = self._calculate_eke(current_u, current_v)
        
        # Find eddies based on vorticity and EKE
        strong_vorticity = np.abs(vorticity) > 0.1  # Threshold for strong rotation
        high_eke = eke > 0.01  # Threshold for high kinetic energy
        
        eddy_mask = strong_vorticity & high_eke
        
        # Label connected eddy regions
        labeled_eddies, num_eddies = ndimage.label(eddy_mask)
        
        eddies_data = {
            'eddy_mask': eddy_mask,
            'labeled_eddies': labeled_eddies,
            'vorticity': vorticity,
            'eddy_kinetic_energy': eke,
            'total_eddies': num_eddies
        }
        
        print(f"✅ Found {num_eddies} eddies from altimetry data")
        return eddies_data
    
    def _find_local_extrema(self, data, find_max=True, min_distance=3):
        """Find local maxima or minima in 2D data"""
        if find_max:
            return ndimage.maximum_filter(data, size=min_distance) == data
        else:
            return ndimage.minimum_filter(data, size=min_distance) == data
    
    def _calculate_vorticity(self, u, v):
        """Calculate vorticity (curl) from velocity fields"""
        dv_dx = np.gradient(v, axis=1)
        du_dy = np.gradient(u, axis=0)
        return dv_dx - du_dy
    
    def _calculate_eke(self, u, v):
        """Calculate Eddy Kinetic Energy"""
        u_mean, v_mean = np.mean(u), np.mean(v)
        u_prime, v_prime = u - u_mean, v - v_mean
        return 0.5 * (u_prime**2 + v_prime**2)
    
    def _characterize_eddies(self, eddy_mask, sst_data, lat, lon, eddy_type):
        """Characterize detected eddies with properties"""
        labeled_eddies, num_eddies = ndimage.label(eddy_mask)
        eddies = []
        
        for i in range(1, num_eddies + 1):
            eddy_indices = np.where(labeled_eddies == i)
            
            if len(eddy_indices[0]) < self.min_eddy_size:
                continue  # Skip small noise
            
            eddy_lats = lat[eddy_indices]
            eddy_lons = lon[eddy_indices]
            eddy_temps = sst_data[eddy_indices]
            
            eddy_data = {
                'type': eddy_type,
                'center_lat': np.mean(eddy_lats),
                'center_lon': np.mean(eddy_lons),
                'size_km': len(eddy_indices[0]) * 1.0,  # Approximate km
                'mean_temperature': np.mean(eddy_temps),
                'temperature_anomaly': np.mean(eddy_temps) - np.mean(sst_data),
                'indices': eddy_indices
            }
            
            eddies.append(eddy_data)
        
        return eddies

# Example usage
if __name__ == "__main__":
    # Test with sample data
    detector = EddyDetector()
    
    # Create sample ocean data (replace with real NASA data)
    sample_sst = np.random.normal(20, 2, (100, 100))
    sample_lat = np.linspace(30, 40, 100)
    sample_lon = np.linspace(-70, -60, 100)
    
    # Detect eddies
    eddies = detector.detect_eddies_from_sst(sample_sst, sample_lat, sample_lon)
    print(f"Detected {eddies['total_eddies']} eddies")
