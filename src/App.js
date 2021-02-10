import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/layout/Navbar/Navbar";
import SideDrawer from "./components/layout/SideDrawer/SideDrawer";
import Footer from "./components/layout/Footer/Footer";

// Pages
import Home from "./components/pages/Home/Home";
import Account from "./components/pages/Account/Account";
import Product from "./components/pages/Product/Product";
import PageNotFound from "./components/pages/PageNotFound/PageNotFound";

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
          <Route exact path="/account" component={Account} />
          <Route exact path="/product/:productId" component={Product} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
