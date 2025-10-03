from training.data_downloader import NASADataDownloader

def test_nasa_integration():
    print("🧪 Testing NASA Data Integration...")
    
    downloader = NASADataDownloader()
    
    data = downloader.get_complete_satellite_data(
        date="2024-03-15", 
        region_name="gulf_stream"
    )
    
    print("✅ NASA Data Integration Test PASSED!")
    print(f"📊 Got data from: {list(data.keys())}")

if __name__ == "__main__":
    test_nasa_integration()
