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
import AboutUs from "./components/pages/AboutUs/AboutUs";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import StoreLocation from "./components/pages/StoreLocation/StoreLocation";
import Wishlist from "./components/pages/Wishlist/Wishlist";

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
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/wishlist" component={Wishlist} />
          <Route exact path="/store-location" component={StoreLocation} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
