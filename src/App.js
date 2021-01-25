import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/layout/Navbar/Navbar";
import SideDrawer from "./components/layout/SideDrawer/SideDrawer";
import Footer from "./components/layout/Footer/Footer";

// Pages
import Home from "./components/pages/Home/Home";
import RegisterOrLogin from "./components/pages/Register or Login/RegisterOrLogin";

const App = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const drawerToggleHandler = () => {
    setToggleDrawer(!toggleDrawer);
  };

  return (
    <Router>
      <div className="app">
        <Navbar hamClicked={drawerToggleHandler} />
        <SideDrawer show={toggleDrawer} bgClicked={drawerToggleHandler} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register-or-login" component={RegisterOrLogin} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
