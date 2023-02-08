import { Tab } from '@headlessui/react';
import { PropsOf } from '@headlessui/react/dist/types';
import clsx from 'clsx';

const CustomTabGroup = Tab.Group;
const CustomTabPanels = Tab.Panels;

// TODO: type properly

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
type CustomTabListProps = PropsOf<Tab.List>;
const CustomTabList = ({
  className,
  ...rest
}: CustomTabListProps): JSX.Element => (
  <Tab.List
    className={clsx(
      'flex',
      'p-1',
      'space-x-1',
      'bg-blue-900',
      'bg-opacity-20',
      'rounded-xl',
      className
    )}
    {...rest} />
);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
type CustomTabProps = PropsOf<Tab>;
const CustomTab = ({
  className,
  ...rest
}: CustomTabProps): JSX.Element => (
  <Tab
    className={({ selected }) =>
      clsx(
        'w-full',
        'py-2.5',
        'text-sm',
        'leading-5',
        'font-medium',
        'rounded-lg',

        'focus:outline-none',
        'focus:ring-1',
        'ring-offset-1',
        'ring-offset-blue-400',
        'ring-white',
        'ring-opacity-60',
        selected ?
          clsx(
            'text-blue-700',
            'bg-white',
            'shadow'
          ) :
          clsx(
            'text-blue-100',
            'hover:bg-white',
            'hover:bg-opacity-10',
            'hover:text-white'
          ),
        className
      )
    }
    {...rest} />
);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
type CustomTabPanelProps = PropsOf<Tab.Panel>;
const CustomTabPanel = ({
  className,
  ...rest
}: CustomTabPanelProps): JSX.Element => (
  <Tab.Panel
    className={clsx(
      'rounded-xl',
      'focus:outline-none',
      'focus:ring-1',
      'ring-offset-1',
      'ring-offset-blue-400',
      'ring-white',
      'ring-opacity-60',
      className
    )}
    {...rest} />
);

export {
  CustomTabList,
  CustomTabPanels,
  CustomTab,
  CustomTabPanel
};

export default CustomTabGroup;
