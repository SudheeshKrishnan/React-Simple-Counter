import React, { Component } from 'react';

import './App.css';
import First from './Learn/components/First'
import Sec, { Third } from './Learn/components/Second'


import { render } from '@testing-library/react'
import CounterButton from './counter/counter'
class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterButton/>
        


      </div>
    );
  }
}


class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponents">
        Sudheesh
        <First />
        <Sec></Sec>
        <Third></Third>
      </div>
    );
  }


}


export default App;

