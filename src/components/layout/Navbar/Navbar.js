import "./Navbar.css";

// Components
import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";
import BottomHeader from "./BottomHeader";

const Navbar = () => {
  return (
    <div className="navigationbar">
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
    </div>
  );
};

export default Navbar;
