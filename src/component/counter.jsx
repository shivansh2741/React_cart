import React, { Component } from "react";
import Button from "@mui/material/Button";
import Counters from "./counters";

class Counter extends Component {
 
  render() {
    return (
      <div>
        <span className={this.getBatchClasses()} style={{ fontSize: "20px" }}>
          {this.props.counter.value}
        </span>
        <Button onClick={() => {this.props.onIncrement(this.props.counter)}} variant="outlined">
          Increment
        </Button>
        <Button
          onClick={() => {
            this.props.onDelete(this.props.counter.id);
          }}
          variant="outlined"
          color="error"
          style={{ margin: "10px" }}
        >
          Delete
        </Button>
      </div>
    );
  }

  getBatchClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value == 0 ? "warning" : "primary";
    return classes;
  }
}

// function Counter(){
//     return <h1>Hello World</h1>
// }
export default Counter;
