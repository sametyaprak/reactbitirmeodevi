import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Main from "./components/Main";
import SayiTahmini from "./ufakcalismalar/SayiTahmini";
import Maincardcomponent from "./bitirme/components/Maincardcomponent";
import Form01Component from "../src/forms/Form01Component"
import Form02Component from "../src/forms/Form02Component"
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Carousel />
          </Route>
          <Route path="/personel1">
            <Main />
          </Route>
          <Route path="/personel2">
            <Maincardcomponent/>
          </Route>
          <Route path="/sayitahmini">
            <SayiTahmini/>
          </Route>
          <Route path="/form1">
            <Form01Component/>
          </Route>
          <Route path="/form2">
          <Form02Component/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
