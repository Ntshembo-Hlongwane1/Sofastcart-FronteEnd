import "./Navbar.css";

// Components
import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";
import BottomHeader from "./BottomHeader";

const Navbar = ({ hamClicked }) => {
  return (
    <div className="navigationbar">
      <TopHeader />
      <MiddleHeader clicked={hamClicked} />
      <BottomHeader />
    </div>
  );
};

export default Navbar;
