import "./LocationInfoBox.css";

const LocationInfoBox = ({ info, onClick }) => {
  return (
    <div className="location-info">
      <span className="close-location-info" onClick={onClick}>
        X
      </span>
      <h2>Event Location Info</h2>
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          Title: <strong>{info.title}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
