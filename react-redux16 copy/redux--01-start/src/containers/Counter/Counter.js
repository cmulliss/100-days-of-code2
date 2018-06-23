import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  state = {
    counter: 0
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };
  // CounterOutput value={this.state.counter} changes to
  // CounterOutput value={this.props.ctr}
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={() => this.counterChangedHandler("inc")}
        />
        <CounterControl
          label="Decrement"
          clicked={() => this.counterChangedHandler("dec")}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.counterChangedHandler("add", 5)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.counterChangedHandler("sub", 5)}
        />
      </div>
    );
  }
}
// define prop names, eg ctr, given by redux, reaching out to redux state, set up in reducer, so counter property available. We can access the counter property on our state.
const mapStateToProps = state => {
  return {
    ctr: state.counter
  };
};

export default connect(mapStateToProps)(Counter);

/* 
mapStateToProps, store instructions in here about how the state, managed by redux, should be mapped to props you can use in this container. 
The state managed by redux, is NOT the state you can see here:
state = {
    counter: 0
  };
because state is the thing you change internally from WITHIN a component. Now redux is going to manage state instead. We dont want to get anything we can change internally, and props are changed internally. That is why we map the redux state to props.
It stores a fn which expects the state stored in redux as the input and returns a js object which is a map of prop names and slices of the state stored in redux. 
*/
