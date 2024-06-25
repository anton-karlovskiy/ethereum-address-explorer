import {
  Story,
  Meta
} from '@storybook/react';

import CustomContainedButton, { Props } from '.';

const Template: Story<Props> = args => <CustomContainedButton {...args} />;

const Default = Template.bind({});
Default.args = {
  children: 'CustomContainedButton'
};

export {
  Default
};

export default {
  title: 'buttons/CustomContainedButton',
  component: CustomContainedButton
} as Meta;
