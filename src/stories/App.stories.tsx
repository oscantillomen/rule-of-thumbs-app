import { ComponentStory, ComponentMeta } from '@storybook/react';
import App from '../App';

export default {
  title: 'Example/Page',
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <App />;

export const Default = Template.bind({});
