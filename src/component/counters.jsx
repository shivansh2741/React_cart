import React, { Component } from "react";
import Counter from "./counter";
import Button from "@mui/material/Button";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  handleReset = () =>{
const newcounters = [...this.state.counters];
    newcounters.map((c) => {
        c.value = 0;
    });

    this.setState({counters : newcounters});
  }

  handleDelete = (deleteid) => {
    const updatedEntries = this.state.counters.filter(
      (entry) => entry.id !== deleteid
    );
    this.setState({ counters: updatedEntries });
  };

  handleClick = (counter) => {
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
  };
 
  render() {
    return (
      <div>
        <Button onClick = {this.handleReset} variant="contained">Reset</Button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter = {counter}
            onIncrement = {this.handleClick}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
