import React, { Component } from "react";
import "./timer.css"


class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.msToTime(0),
            timerId: null,
            results: []
        };
        this.timerStep = 10;
    }
    msToTime(val) {
        const const_1000 = 1000;
        const const_60 = 60;
        const millisec = val % const_1000;
        val = (val - millisec) / const_1000;
        const seconds = val % const_60;
        val = (val - seconds) / const_60;
        const minutes = val % const_60;
        const hrs = (val - minutes) / const_60;
        return hrs + ':' + minutes + ':' + seconds + '.' + millisec;
    }
    startStopTimer = () => {
        if (this.state.timerId) {
            clearInterval(this.state.timerId);
            this.setState({
                timerId: null,
                results: [...this.state.results, this.state.time]
            });
        } else {
            let millisec = this.timerStep;

            const timerId = setInterval(() => {
                this.setState({
                    time: this.msToTime(millisec)
                });
                millisec += this.timerStep;
            }, this.timerStep);
            this.setState({
                timerId
            });
        }
    }

    render() {
        const { time, timerId, results } = this.state;

        return (
            <div>
                <div className="time">{time}</div>
                <button className="btn btn-outline-success start-stop-timer-btn" onClick={this.startStopTimer}>
                    {timerId? 'Stop' : 'Start'} timer
                </button>
                <div className="results">
                    <p className="results-title">Results list:</p>
                    <div className="results-list">
                        {results.map(result => (
                            <p className="each-result" key={result}>{result}</p>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Timer;