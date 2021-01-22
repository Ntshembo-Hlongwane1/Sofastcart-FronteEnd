import { Link } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = ({ route }) => {
  return (
    <div className="customer_container">
      <ul className="breadcrumb">
        <li className="breadcrumbItem">
          <Link to="/">Home</Link>
        </li>
        {route.map((el, index) => {
          if (index === route.length - 1) {
            return (
              <li className="breadcrumbItem" key={el.link}>
                {el.title}
              </li>
            );
          } else {
            return (
              <li className="breadcrumbItem" key={el.link}>
                <Link to={el.link}>{el.title}</Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
