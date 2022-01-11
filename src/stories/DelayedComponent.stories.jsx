import createAsyncCallback from '@loki/create-async-callback';

import { DelayedComponent } from './DelayedComponent';

export default {
  title: 'Example/DelayedComponent',
  component: DelayedComponent,
};

const Template = (args) => <DelayedComponent {...args} />;

export const Hello = Template.bind({});
Hello.args = {
  text: 'Hello',
  onDone: createAsyncCallback(),
};

export const World = Template.bind({});
World.args = {
  text: 'World',
  onDone: createAsyncCallback(),
};
