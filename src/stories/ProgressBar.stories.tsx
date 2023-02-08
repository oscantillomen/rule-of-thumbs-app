import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProgressBar from '../components/CharacterCard/ProgressBar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Card/ProgressBar',
  component: ProgressBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    votes: Object,
  },
} as ComponentMeta<typeof ProgressBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProgressBar> = args => (
  <ProgressBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  votes: {
    positive: 100,
    negative: 80,
  },
};
