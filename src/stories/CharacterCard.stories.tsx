import { ComponentStory, ComponentMeta } from '@storybook/react';

import CharacterCard from '../components/CharacterCard/CharacterCard';

import img from '../assets/img/people/malala.png';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Card/CharacterCard',
  component: CharacterCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    name: String,
    img: String,
    votes: {
      positive: Number,
      negative: Number,
    },
    description: String,
  },
} as ComponentMeta<typeof CharacterCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CharacterCard> = args => <CharacterCard {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  name: 'Malala Yousafzai',
  img,
  votes: {
    positive: 100,
    negative: 80,
  },
  description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus. Eu velit…',
};
