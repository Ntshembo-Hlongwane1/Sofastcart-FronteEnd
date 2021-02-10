import { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";

const Map = ({ lng = 0, lat = 0, zoom = 5 }) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoidGhlLWZ1bGwtc3RhY2stanVua2llIiwiYSI6ImNra3pqcWlyaTBrOWkycHFvNGpmemN1OXcifQ.aE6SN4dxKF-ywCbMINWEBQ";
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [lng, lat],
        zoom: zoom,
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map, lat, lng, zoom]);

  return (
    <div className="mapContainer">
      <div ref={(el) => (mapContainer.current = el)} />
    </div>
  );
};

export default Map;
