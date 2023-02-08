import {
  Meta,
  Story
} from '@storybook/react';

import CustomAnchorLink, { Props } from '.';

const Template: Story<Props> = args => <CustomAnchorLink {...args} />;

const Default = Template.bind({});
Default.args = {
  href: '/',
  children: 'CustomAnchorLink'
};

export { Default };

export default {
  title: 'UI/CustomAnchorLink',
  component: CustomAnchorLink
} as Meta;
