import React from 'react';
import './App.css';

import Counter from './components/Counter';

class App extends React.Component {
  state = {
    count: 0
  };

  handleCountChange = value => {
    // we should never update state directly, and we SHOULD ALWAYS USE setState() method: this.state.count++; ❌❌❌
    this.setState({
      count: value
    });
  };

  render() {
    return (
      <div className='App'>
        {/* onCountChange -> prop we pass to carry down to the Counter component the handleCountChange method */}
        <Counter value={this.state.count} onCountChange={this.handleCountChange} />
      </div>
    );
  }
}

export default App;
