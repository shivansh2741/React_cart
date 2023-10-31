import React, { Component } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Counters from "./component/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  handleReset = () => {
    const newcounters = [...this.state.counters];
    newcounters.map((c) => {
      c.value = 0;
    });

    this.setState({ counters: newcounters });
  };

  handleDelete = (deleteid) => {
    const updatedEntries = this.state.counters.filter(
      (entry) => entry.id !== deleteid
    );
    this.setState({ counters: updatedEntries });
  };

  handleClick = (counter) => {
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          items={this.state.counters.filter((item) => item.value > 0).length}
        />
        <main className="container">
          <Counters
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleClick}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
