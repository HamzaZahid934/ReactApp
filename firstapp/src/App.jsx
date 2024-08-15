import React from "react";

import Home from "./Pages/Home";
import About from "./Pages/About";



function App() {

  let company = "Weblotex.co"
  let about = "Web development"
  let address = "abc, street123.pkr"

  return (
    <React.Fragment >
      <div> home page start</div>
      <Home Companydata={company} aboutdata={about} addressdata={address} />
      <div>about page start</div>
      <About />
      <div>contact page start</div>
      <contact />
    </React.Fragment >)
}

export default App;
