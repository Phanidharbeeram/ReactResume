import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Navbar from "./Components/NavBar/Navbar";
import Education from "./Components/Education/Education";
import TechnicalSkills from "./Components/TechnicalSkills/TechnicalSkills";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/NotFound/NotFound";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/eduQualifications" component={Education} />
        <Route path="/techSkills" component={TechnicalSkills} />
        <Route path="/Contact" component={Contact} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;