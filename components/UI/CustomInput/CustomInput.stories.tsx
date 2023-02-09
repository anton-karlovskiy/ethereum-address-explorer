import {
  Story,
  Meta
} from '@storybook/react';

import CustomInput, { Props } from '.';

const Template: Story<Props> = args => <CustomInput {...args} />;

const Default = Template.bind({});
Default.args = {
  id: 'id',
  name: 'name',
  placeholder: 'placeholder'
};

export {
  Default
};

export default {
  title: 'UI/CustomInput',
  component: CustomInput
} as Meta;
