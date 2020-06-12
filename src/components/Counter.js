import React from 'react';

// Counter component doesn't have state with "count" value
// The state that gets updated actually lives in the App component
// However, we are able to manipulate with state changes from child component thanks to the "onCountChange" method
// "onCountChange" gets passed as a prop and lifts the value of a counter to the parent component and when a new counter value
// gets set inside "handleCountChange", that value again gets passed down to the child component and gets displayed to the user.

class Counter extends React.Component {
  constructor(props) {
    super(props);
    console.log('Component was constructed');
    console.log('Props from passed from App: ', props);
    // Props from passed from App:
    // onCountChange: value => {...}
    // value: 0
  }

  render() {
    const increment = () => {
      // "onCountChange" - how we named "handleCountChange" method when we passed it down to the Counter component
      this.props.onCountChange(this.props.value + 1);
    };

    return (
      <div>
        <h4>Counter value: {this.props.value}</h4>
        <button onClick={increment}>+</button>
      </div>
    );
  }
}

export default Counter;
