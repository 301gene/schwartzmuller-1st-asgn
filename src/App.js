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
    const style = {
      margin: '32px',
      border: '1px groove green',
      padding: '4px'
    };

    return (
      <div className="App" style={style}>
        <UserInput changed={this.userNameHandler} userName={this.state.username} />
        <UserOutput suserName={this.state.username} />
        <UserOutput />
      </div>
    );
  }
}

export default App;
