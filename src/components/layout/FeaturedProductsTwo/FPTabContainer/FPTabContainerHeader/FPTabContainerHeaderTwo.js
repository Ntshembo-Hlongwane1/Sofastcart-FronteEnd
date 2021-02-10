import "./FPTabContainerHeaderTwo.css";

const FPTabContainerHeaderTwo = ({ tab, changeTabIdx }) => {
  return (
    <div className="fpTabContainerHeader">
      <nav className="fpTabContainerHeader__navigation">
        <ul className="fpTabContainerHeader__navigation-items">
          <li
            onClick={() => changeTabIdx(0)}
            className={`fpTabContainerHeader__navigation-item ${
              tab === 0 && "active"
            }`}
          >
            Featured
          </li>
          <li
            onClick={() => changeTabIdx(1)}
            className={`fpTabContainerHeader__navigation-item ${
              tab === 1 && "active"
            }`}
          >
            On Sale
          </li>
          <li
            onClick={() => changeTabIdx(2)}
            className={`fpTabContainerHeader__navigation-item ${
              tab === 2 && "active"
            }`}
          >
            Top Rated
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FPTabContainerHeaderTwo;
