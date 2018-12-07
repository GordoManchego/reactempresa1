import React, { Component } from 'react';
import Row1 from './rows/row1';
import Row2 from './rows/row2';
class App extends Component {
  render() {

    return (
      <div>
        <Row1/>
        <Row2/>        
      </div>
    );
  }
}
export default App;
