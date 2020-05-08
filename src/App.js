import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Navbar from "./Components/NavBar/Navbar";
import Education from "./Components/Education/Education";
import TechnicalSkills from "./Components/TechnicalSkills/TechnicalSkills";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Components/Login/Login";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/eduQualifications" component={Education} />
        <Route path="/techSkills" component={TechnicalSkills} />
        <Route path="/Contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
export default App;
