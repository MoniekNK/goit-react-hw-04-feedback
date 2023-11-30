import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = rating => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [rating]: prevFeedback[rating] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback === 0
      ? 0
      : Math.floor((feedback.good / totalFeedback) * 100);
  };

  const { good, neutral, bad } = feedback;
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className="app-container">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};

export { App };
