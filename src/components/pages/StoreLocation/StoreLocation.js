// import {useState} from 'react';
import "./StoreLocation.css";

// Components
import Map from "../../layout/Map/Map";

const StoreLocation = () => {
  return (
    <div className="storeLocation">
      <div className="customer_container storeLocation__flexbox">
        <div className="storeLocation__flexbox-left">
          <h3>You can find us here!</h3>
          <ul>
            <li>
              <p>
                <i className="fas fa-map-marker-alt"></i>
                <span>Store VN</span>
              </p>
              <p>Arenatheme HCM City</p>
            </li>
            <li>
              <p>
                <i className="fas fa-map-marker-alt"></i>
                <span>Store VN</span>
              </p>
              <p>Arenatheme HCM City</p>
            </li>
            <li>
              <p>
                <i className="fas fa-map-marker-alt"></i>
                <span>Store VN</span>
              </p>
              <p>Arenatheme HCM City</p>
            </li>
          </ul>
        </div>

        <div className="storeLocation__flexbox-right">
          <Map
            eventData={[
              {
                id: 1,
                coordinates: [28.2293, -26.0944],
                title: "Kempton Park",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default StoreLocation;
