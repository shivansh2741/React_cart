import React, { Component } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Counters from "./component/counters";

class App extends Component {
  render() { 
    return (
      <React.Fragment>
      <Navbar />
      <main className="container">
        <Counters />
      </main>
    </React.Fragment>
    );
  }
}
 

export default App;

