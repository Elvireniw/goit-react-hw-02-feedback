import React, { Component } from 'react';

import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Layout } from './layout/Layout';
import { Section } from './section/Section';
import { Statistics } from './statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = evt => {
    console.log(evt); // good
    this.setState({ [evt]: this.state[evt] + 1 });
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) =>
    Math.round((good * 100) / this.countTotalFeedback(this.state));

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              this.state
            )}
          ></Statistics>
        </Section>
      </Layout>
    );
  }
}
