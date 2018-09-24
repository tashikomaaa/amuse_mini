import React, { Component } from 'react';
import './App.css';
//import DemoScene from './components/DemoScene';
import DropzoneComponent from './components/DropzoneComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DropzoneComponent />
      </div>
    );
  }
}

export default App;
