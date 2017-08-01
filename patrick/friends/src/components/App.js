import React, { Component } from 'react';
import logo from '../art/logo.svg';
import frenz from '../art/frenz.png';
import '../css/App.css';

import FriendsList from '../components/FriendsList';
// import AddFriend from '../components/AddFriend';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to LS-AJAX Friends:</h2>
          <img src={frenz} alt='Friends'></img>
        </div>
        <p className="App-intro">
          Something <code>AMAZING</code> will go here.
        </p>
        {/* <AddFriend /> */}
        <FriendsList />
      </div>
    );
  }
}

export default App;
