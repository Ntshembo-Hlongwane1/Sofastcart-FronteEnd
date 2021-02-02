import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = ({ match }) => {
  return (
    <div className="pagenotfound customer_container">
      <p className="pagenotfound__404">404</p>
      <p className="pagenotfound__notfound">Page Not Found</p>
      <p className="pagenotfound__funnytext">Oops looks like you are lost</p>
      <Link to="/" className="pagenotfound__backBtn">
        Go Back
      </Link>
    </div>
  );
};

export default PageNotFound;
