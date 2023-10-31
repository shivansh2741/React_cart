import React, { Component } from "react";
import Counter from "./counter";
import Button from "@mui/material/Button";
import App from "../App";

class Counters extends Component {
  render() {
    return (
      <div>
        <Button onClick = {this.props.onReset} variant="contained">Reset</Button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            counter = {counter}
            onIncrement = {this.props.onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
