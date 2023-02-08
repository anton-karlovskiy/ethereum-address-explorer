import {
  Meta,
  Story
} from '@storybook/react';

import CustomRouterLink, { Props } from '.';

const Template: Story<Props> = args => <CustomRouterLink {...args} />;

const Default = Template.bind({});
Default.args = {
  href: '/',
  children: 'RouterLink'
};

export { Default };

export default {
  title: 'UI/CustomRouterLink',
  component: CustomRouterLink
} as Meta;
