import React, { Component } from 'react';
import Shop from './containers/Shop';
class App extends Component {
  // props is for taking data from the parent
  constructor(props) {
    super(props);
    this.state = {  };
  }
  // render call first
  render() {
    
    // return print the component or return the component
    return (
     <Shop/>
    );
  }
}
// default export
export default App;
