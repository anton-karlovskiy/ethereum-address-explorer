import {
  Story,
  Meta
} from '@storybook/react';

import CustomGreenContainedButton, { Props } from '.';

const Template: Story<Props> = args => <CustomGreenContainedButton {...args} />;

const Default = Template.bind({});
Default.args = {
  children: 'CustomGreenContainedButton'
};

export {
  Default
};

export default {
  title: 'buttons/CustomGreenContainedButton',
  component: CustomGreenContainedButton
} as Meta;
