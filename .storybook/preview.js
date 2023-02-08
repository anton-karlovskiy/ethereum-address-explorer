import clsx from 'clsx';
import * as NextImage from 'next/image';

import '../styles/globals.css';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

const decorators = [
  Story => (
    <div
      className={clsx(
        'h-screen',
        'p-4',
        'font-inter'
      )}>
      <Story />
    </div>
  )
];

export {
  parameters,
  decorators
};
