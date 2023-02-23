import React, { Component } from "react";

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        posFeedback: 0,
    }

    changeStat = (e) => {
        // console.log(e.target.name);
        this.setState(prevState => {
            return {
                [e.target.name]: prevState[e.target.name] + 1,
            }
        })
        this.countTotalFeedback(); 
        this.countPositiveFeedbackPercentage();
    }

//       countTotalFeedback = () => {
//     const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
//     return totalFeedback;
//   };

    countTotalFeedback = () => {
        // console.log(this.state);
        this.setState(prevState => {
            return {
                total: prevState.good + prevState.neutral + prevState.bad,
            }
        })
    }

    countPositiveFeedbackPercentage = () => {
        this.setState(prevState => {
            return {
                posFeedback: Math.round((prevState.good / prevState.total) * 100),
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
                <div>Total: <span>{this.state.total}</span></div>
                <div>Positive feedback: <span>{this.state.posFeedback}%</span></div>
            </div>
    );
    }

}


export default Feedback;