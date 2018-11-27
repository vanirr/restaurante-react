import React, { Component } from 'react';
import { observer } from 'mobx-react'
import WeatherLocation from './components/WeatherLocation';
//import DevTools from 'mobx-react-devtools';

import './App.css';

class App extends Component {
  render() {
   
    return (
      <div className="App">
      <WeatherLocation> </WeatherLocation>
      
      </div>
    );
  }
}

export default observer(App);
