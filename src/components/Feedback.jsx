import React, { Component } from "react";

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    changeStat = (e) => {
        console.log(e.target);
        this.setState(prevState => {
            return {
                [e.target.name]: prevState[e.target.name] + 1,
            }
        })
    }

    static defaultProps = {};

    static propTypes = {};

    render() {
        return (
            <div>
                <p>Please leave feedback</p>
                <button type="button" onClick={this.changeStat} name="good">Good</button>
                <button type="button" onClick={this.changeStat} name="neutral">Neutral</button>
                <button type="button" onClick={this.changeStat} name="bad">Bad</button>
                <p>Statistics</p>
                <div>Good: <span>{this.state.good}</span></div>
                <div>Neutral: <span>{this.state.neutral}</span></div>
                <div>Bad: <span>{this.state.bad}</span></div>
            </div>
    );
    }

}


export default Feedback;