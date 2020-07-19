import React, { Component } from "react";
import Timer from "./components/timer";

import './App.css'




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTimer: true
    }
  }

  toggleTimer = () => {
    this.setState({showTimer: !this.state.showTimer});
  }

  render() {
    const {showTimer} = this.state;
    return (
        <div className="mainDiv">
          <button className="btn btn-outline-success hide-show-timer-btn" onClick={this.toggleTimer}>
            {showTimer ? 'Hide' : 'Show'} timer
          </button>
          {showTimer && <Timer/>}
        </div>
    )
  }
}

export default App;