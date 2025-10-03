import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const sharkData = [
  {
    id: 1,
    name: "Shark Alpha",
    lat: -10.5,
    lng: 120.3,
    lastSeen: "2025-10-03 09:15 UTC",
    species: "Great White Shark",
    region: "Central Pacific Ocean",
    size: "4.2 m",
    tagId: "A123",
  },
  {
    id: 2,
    name: "Shark Beta",
    lat: 15.2,
    lng: -45.6,
    lastSeen: "2025-10-03 07:42 UTC",
    species: "Tiger Shark",
    region: "Atlantic Ocean",
    size: "3.5 m",
    tagId: "B456",
  },
  {
    id: 3,
    name: "Shark Gamma",
    lat: -22.8,
    lng: 60.5,
    lastSeen: "2025-10-02 22:10 UTC",
    species: "Hammerhead Shark",
    region: "Indian Ocean",
    size: "3.0 m",
    tagId: "C789",
  },
  {
    id: 4,
    name: "Shark Delta",
    lat: 5.6,
    lng: 150.2,
    lastSeen: "2025-10-03 04:30 UTC",
    species: "Bull Shark",
    region: "Western Pacific Ocean",
    size: "3.8 m",
    tagId: "D012",
  },
];

export default function SharkTracking() {
  return (
    <section className="relative py-16 bg-[#0a75d3]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Shark Tracking Map
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Track tagged sharks across the oceans. Zoom in to explore details and click a marker for more information.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <MapContainer
          center={[0, 0]}
          zoom={2}
          minZoom={2}
          scrollWheelZoom={true}
          style={{
            height: "600px",
            width: "100%",
            borderRadius: "1rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {sharkData.map((shark) => (
            <Marker key={shark.id} position={[shark.lat, shark.lng]}>
              <Popup className="text-gray-800 font-medium space-y-1">
                <h3 className="font-bold text-lg">{shark.name}</h3>
                <p><span className="font-semibold">Species:</span> {shark.species}</p>
                <p><span className="font-semibold">Region:</span> {shark.region}</p>
                <p><span className="font-semibold">Last Seen:</span> {shark.lastSeen}</p>
                <p><span className="font-semibold">Size:</span> {shark.size}</p>
                <p><span className="font-semibold">Tag ID:</span> {shark.tagId}</p>
              </Popup>
              <Tooltip>{shark.name}</Tooltip>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Buttons Below Map */}
      <div className="flex justify-center gap-6 mt-8">
        <a
          href="https://www.ocearch.org/tracker/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-[#024075] hover:bg-[#023663] text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
        >
          Track Shark Live
        </a>
      </div>
    </section>
  );
}
