import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import notFoundImage from "./images/404_Error.jpg";
import "./css/main.css";
import PropTypes from "prop-types";
import "typeface-roboto";
import Test1 from "./Test1.jsx";
import Test2 from "./Test2.jsx";
import Test3 from "./Test3.jsx";
import Test4 from "./Test4.jsx";
import christmas from "./images/christmas.gif";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/test/1" exact component={Test1} />
        <Route path="/test/2" exact component={Test2} />
        <Route path="/test/3" exact component={Test3} />
        <Route path="/test/4" exact component={Test4} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;

const Layout = ({children}) => (
  <div className={"layout"}>
    <div className={"drawer"}>
      <Navigation />
    </div>
    <div className={"content"}>
      {children}
    </div>
    <div className={"christmas-container"}>
      <img src={christmas}/>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

const Navigation = () => (
  <div className={"navigation"}>
    <Link to={"/"}>Home</Link>
    <Link to={"/test/1"}>Ülesanne 1 - Easy</Link>
    <Link to={"/test/2"}>Ülesanne 2 - Easy</Link>
    <Link to={"/test/3"}>Ülesanne 3 - Medium</Link>
    <Link to={"/test/4"}>Ülesanne 4 - Medium</Link>
  </div>
);

const Home = () => (
  <div>
    Tere!
    <p>
      Menüüst leiad harjutusülesanded arvestuseks.
    </p>
  </div>
);

const NotFound = () => (
  <div>
    <img src={notFoundImage}/>
  </div>
);
