import { useState, useEffect } from "react";
import "./StoreLocation.css";

// Components
import Map from "../../layout/Map/Map";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";

// Locations
import storeLocations from "../../../assets/store-locations";

const path = [{ title: "Store Location", link: "/store-location" }];

const StoreLocation = () => {
  const [viewLocation, setViewLocation] = useState(null);

  useEffect(() => {
    console.log(storeLocations[0]);
    setViewLocation(storeLocations[0]);
  }, []);

  return (
    <div className="storeLocation">
      <Breadcrumb route={path} />
      <div className="customer_container storeLocation__flexbox">
        <div className="storeLocation__flexbox-left">
          <h3>You can find us here!</h3>
          <ul>
            <li onClick={() => setViewLocation(storeLocations[0])}>
              <p>
                <i className="fas fa-map-marker-alt"></i>
                <span>Kempton Branch</span>
              </p>
              <p>Van Riebeeck Park Zulu Street</p>
            </li>
            <li onClick={() => setViewLocation(storeLocations[1])}>
              <p>
                <i className="fas fa-map-marker-alt"></i>
                <span>Sandton Branch</span>
              </p>
              <p>Midrand 12 Business Street</p>
            </li>
          </ul>
        </div>

        <div className="storeLocation__flexbox-right">
          <Map
            center={
              viewLocation && {
                lat: viewLocation.coordinates[1],
                lng: viewLocation.coordinates[0],
              }
            }
            zoom={13}
            eventData={storeLocations}
          />
        </div>
      </div>
    </div>
  );
};

export default StoreLocation;
