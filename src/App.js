import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hobies from './component/App/Hobies';
import Profile from './component/App/Profile'

 let DATA = {
    name: 'John Smith',
    imgURL: 'http://lorempixel.com/200/200/',
    hobbyList: ['coding', 'writing', 'skiing']
}



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          this is a single page app

        </p>
          <h1>we have listed component name here from other component</h1>
          <Hobies/>
          <Profile profileData = {DATA} />
      </div>
    );
  }
}

export default App;
