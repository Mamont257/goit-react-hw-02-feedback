import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";


export class App extends Component {
  state = {
    good: 0,
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
  
  render() {
    return (
      <div>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions onLeaveFeedback={this.changeStat}/>
        </Section>
        <Section title={"Statistics"}>
          {this.state.total ? (
              <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positivePercentage={this.state.posFeedback} />
          ) : (
              <Notification message="There is no feedback"/>
          )}
        </Section>
      </div>
    )
  }
  

}