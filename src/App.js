import { useState } from "react";

// Components
import Navbar from "./components/layout/Navbar/Navbar";
import SideDrawer from "./components/layout/SideDrawer/SideDrawer";
import ImageSlider from "./components/layout/ImageSlider/ImageSlider";

const App = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const drawerToggleHandler = () => {
    setToggleDrawer(!toggleDrawer);
  };

  return (
    <div className="app">
      <Navbar hamClicked={drawerToggleHandler} />
      <SideDrawer show={toggleDrawer} bgClicked={drawerToggleHandler} />
      <ImageSlider />
    </div>
  );
};

export default App;
