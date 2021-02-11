import { useState } from "react";

import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMark/LocationMark";
import LocationInfoBox from "./LocationInfoBox/LocationInfoBox";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  // creating array of LocationMarkers from the eventData
  const markers = eventData.map((ev) => {
    return (
      <LocationMarker
        key={ev.id}
        lat={ev.coordinates[1]}
        lng={ev.coordinates[0]}
        onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
      />
    );
  });

  // Rendering the map and the array of markers onto the map
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyASuZy2UQAPCnGXeC8HViLyESIC5m0oJFU" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && (
        <LocationInfoBox
          info={locationInfo}
          onClick={() => setLocationInfo(null)}
        />
      )}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: -26.0944,
    lng: 28.2293,
  },
  zoom: 6,
};
export default Map;
