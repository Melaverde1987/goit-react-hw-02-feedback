import React from 'react';

import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export const App = () => {
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions />
      </Section>
    </>
  );
};
