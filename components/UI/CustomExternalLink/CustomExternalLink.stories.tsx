import {
  Meta,
  Story
} from '@storybook/react';

import CustomExternalLink, { Props } from '.';

const Template: Story<Props> = args => <CustomExternalLink {...args} />;

const Default = Template.bind({});
Default.args = {
  href: '/',
  children: 'ExternalAnchorLink'
};

export { Default };

export default {
  title: 'UI/ExternalAnchorLink',
  component: CustomExternalLink
} as Meta;
