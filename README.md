# 🦈 Sharks From Space - Habitat Prediction API

A NestJS backend service that predicts shark habitats using machine learning and NASA satellite data.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- Python 3.8+
- NASA Earthdata Account

### Installation

1. **Clone and install**
```bash
git clone <your-repo-url>
cd sharks-from-space
npm install
pip install -r ml-predictor/requirements.txt
Configure environment

env
NASA_TOKEN=your_nasa_token
PORT=3000
Add ML model
Place shark_habitat_model.pkl in ml-predictor/ folder

Run the application

bash
npm run start:dev
📡 API Endpoints
Get Habitat Predictions
http
POST /shark-habitat/predict
{
  "north": 45.0,
  "south": 25.0, 
  "east": -60.0,
  "west": -80.0
}
Get Hotspots
http
GET /shark-habitat/hotspots?threshold=0.7
Health Check
http
GET /shark-habitat/health
🛠 Usage Example
bash
# Test the API
curl "http://localhost:3000/shark-habitat/hotspots"

# Get predictions for specific region
curl "http://localhost:3000/shark-habitat/predict?north=45&south=25&east=-60&west=-80"
🐳 Docker Deployment
bash
docker build -t sharks-from-space .
docker run -p 3000:3000 sharks-from-space
📊 Features
ML-powered shark habitat predictions

NASA satellite data integration

Real-time habitat monitoring

RESTful API with GeoJSON support

Production-ready NestJS architecture

NASA Space Apps Challenge 2025 - Sharks From Space
