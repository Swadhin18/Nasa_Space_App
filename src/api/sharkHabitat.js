const API_URL = import.meta.env.VITE_API_URL;

// Predict shark habitat based on geographic bounds
export async function predictHabitat({ north, south, east, west, resolution = 10 }) {
    const query = new URLSearchParams({ north, south, east, west, resolution }).toString();
    const res = await fetch(`${API_URL}/shark-habitat/predict?${query}`);
    if (!res.ok) throw new Error("Failed to fetch predictions");
    return res.json();
}

// Get shark hotspots based on probability threshold
export async function getHotspots(threshold = 0.7) {
    const res = await fetch(`${API_URL}/shark-habitat/hotspots?threshold=${threshold}`);
    if (!res.ok) throw new Error("Failed to fetch hotspots");
    return res.json();
}

// Health check for backend service
export async function healthCheck() {
    const res = await fetch(`${API_URL}/shark-habitat/health`);
    if (!res.ok) throw new Error("Health check failed");
    return res.json();
}

// Get ML-based data visualization metrics & chart data
export async function getVisualizationData() {
    try {
        const res = await fetch(`${API_URL}/ml/data-visualization`);
        if (!res.ok) throw new Error("Failed to fetch data visualization");
        return await res.json();
    } catch (error) {
        console.error("Visualization API error:", error);
        return null;
    }
}
