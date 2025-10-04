import json
import random

# ✅ Example static data (later can be connected to ML prediction results)

months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]

chart_data = [
    {
        "month": m,
        "chlorophyll": round(random.uniform(1.5, 4.5), 2),
        "temperature": round(random.uniform(24, 31), 1),
        "sharkActivity": round(random.uniform(30, 95), 1),
    }
    for m in months
]

metrics = [
    {
        "id": "chlorophyll",
        "title": "Chlorophyll",
        "value": f"{round(chart_data[-1]['chlorophyll'], 1)}",
        "unit": "mg/m³",
        "change": "+15%",
        "color": "#10b981",
        "borderColor": "border-emerald-200",
    },
    {
        "id": "temperature",
        "title": "Sea Temperature",
        "value": f"{round(chart_data[-1]['temperature'], 1)}",
        "unit": "°C",
        "change": "+8%",
        "color": "#f97316",
        "borderColor": "border-orange-200",
    },
    {
        "id": "activity",
        "title": "Shark Activity",
        "value": f"{round(chart_data[-1]['sharkActivity'], 1)}",
        "unit": "%",
        "change": "+23%",
        "color": "#02427A",
        "borderColor": "border-blue-200",
    },
]

response = {
    "chartData": chart_data,
    "metrics": metrics,
}

print(json.dumps(response))
