import React from "react";
import Home from "./Pages/Home";




function App() {

  let company = "Weblotex.co"
  let about = "Web development"
  let address = "abc, street123.pkr"

  return (
    <React.Fragment >
      <div> home page start</div>
      <Home Companydata={company} aboutdata={about} addressdata={address} />
      <div>about page start</div>
      <div>contact page start</div>
    </React.Fragment >)
}

export default App;
