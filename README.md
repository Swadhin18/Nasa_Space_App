# 🦈 Shark Habitat Prediction & Data Visualization Frontend

A web-based data visualization platform designed for the **NASA Space Apps Challenge** project — **"Sharks from Space"** 🛰️.  
This frontend interacts with a backend ML API to visualize predicted shark habitats, identify hotspots, and provide interactive geospatial insights using **Leaflet maps**, **charts**, and **responsive UI components**.

---

## 🌍 Project Overview

**Shark Habitat Prediction Dashboard** is an interactive web interface built with **React + Vite** to help scientists, researchers, and conservationists analyze and predict shark habitats from satellite data.  
The platform provides:

- 📊 Dynamic visualizations of predicted shark habitat regions.  
- 🗺️ Interactive geospatial mapping with **Leaflet.js**.  
- 🔥 Hotspot detection based on ML prediction thresholds.  
- 🧠 Easy integration with any RESTful or ML backend API.  

---

## ✨ Key Features

- 🧬 **Habitat Prediction Visualization** – Predict shark habitats using API data and display them on an interactive map.  
- 📍 **Hotspot Analysis** – Highlight high-density regions based on prediction confidence.  
- 📈 **Data Insights Dashboard** – Show charts and statistics for further analysis.  
- ⚡ **Fast & Lightweight** – Powered by **Vite**, optimized for rapid development and deployment.  
- 📱 **Responsive UI** – Fully responsive layout with TailwindCSS and React components.

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Frontend Framework | [React](https://reactjs.org/) |
| Build Tool | [Vite](https://vitejs.dev/) |
| UI Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Charts | [Recharts](https://recharts.org/) |
| Maps | [Leaflet](https://leafletjs.com/) & [React Leaflet](https://react-leaflet.js.org/) |
| Icons | [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) |
| HTTP Client | [Axios](https://axios-http.com/) |
| Routing | [React Router DOM](https://reactrouter.com/) |

---

## 📁 Project Structure

shark-website-frontend/
│
├─ public/ # Static assets
│
├─ src/
│ ├─ api/ # API calls (e.g., sharkHabitat.js)
│ ├─ Landing/ # Main landing components (DataVisualization, Hero, etc.)
│ ├─ components/ # Reusable UI components
│ ├─ pages/ # Page-level components
│ ├─ App.jsx # Root component
│ └─ main.jsx # App entry point
│
├─ .env # Environment variables
├─ package.json
├─ vite.config.js
└─ README.md

## 🛠️ Install Dependencies

Make sure you have Node.js ≥ 18 and npm ≥ 9 installed.
Then install the required dependencies:

npm install

## ⚙️ Set Up Environment Variables

Create a .env file in the project root with the following content:

VITE_API_URL=http://localhost:3000/api/ml

## 🚀 Start the Development Server

npm run dev

This will start the frontend at:
http://localhost:5173/

🤝 Contributing

Contributions are welcome!
Please fork this repo and submit a pull request for any improvements or new features.

📜 License

This project is licensed under the MIT License — feel free to use and modify for your own projects.

🧠 Credits

Developed with ❤️ for the NASA Space Apps Challenge
 2025.
Focused on using satellite data and AI to understand, predict, and protect shark habitats from space.

🚀 “From space to sea — mapping the unseen world of sharks.” 🦈

© 2025 Shark Habitat Prediction Project. All rights reserved.

