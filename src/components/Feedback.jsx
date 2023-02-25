import React, { Component } from "react";

class Feedback extends Component {
    state = {
        good: this.props.a,
        neutral: 0,
        bad: 0,
        total: 0,
        posFeedback: 0,
    }

    changeStat = (e) => {
        this.setState(prevState => ({
            [e.target.name]: prevState[e.target.name] + 1,
        }))
        this.countTotalFeedback(); 
        this.countPositiveFeedbackPercentage();
    }

    countTotalFeedback = () => {
        // console.log(this.state);
        this.setState(prevState => ({
            total: prevState.good + prevState.neutral + prevState.bad
        }))
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
            // <div>
                // <p>Please leave feedback</p>
                // <button type="button" onClick={this.changeStat} name="good">Good</button>
                // <button type="button" onClick={this.changeStat} name="neutral">Neutral</button>
                // <button type="button" onClick={this.changeStat} name="bad">Bad</button>
                // <div>
                // <p>Statistics</p>
                // <div>Good: <span>{this.state.good}</span></div>
                // <div>Neutral: <span>{this.state.neutral}</span></div>
                // <div>Bad: <span>{this.state.bad}</span></div>
                // <div>Total: <span>{this.state.total}</span></div>
                // <div>Positive feedback: <span>{this.state.posFeedback}%</span></div>
                // </div>
            {/* </div> */}
    );
    }

}


export default Feedback;