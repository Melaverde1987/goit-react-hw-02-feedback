import React, { Component } from 'react';
import { Statistics } from '../Statistics/Statistics';

export class FeedbackOptions extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    const id = event.target.id;

    this.setState(prevState => {
      return {
        [id]: prevState[id] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    this.countTotalFeedback();
    let positiveFeedback = (100 * good) / this.countTotalFeedback();
    return positiveFeedback;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <div className="buttons-container">
          <button
            onClick={this.handleClick}
            type="button"
            id="good"
            className="btn btn-outline"
          >
            Good
          </button>
          <button
            onClick={this.handleClick}
            type="button"
            id="neutral"
            className="btn btn-outline"
          >
            Neutral
          </button>
          <button
            onClick={this.handleClick}
            type="button"
            id="bad"
            className="btn btn-outline"
          >
            Bad
          </button>
        </div>

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}
