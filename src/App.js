import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: "Scrooge"
  }

  userNameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.userNameHandler} />
        <UserOutput userName={this.state.username} />
        <UserOutput />
      </div>
    );
  }
}

export default App;
