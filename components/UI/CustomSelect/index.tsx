import * as React from 'react';
import {
  Listbox,
  Transition
} from '@headlessui/react';
import { Props } from '@headlessui/react/dist/types';
import clsx from 'clsx';

import { BORDER_CLASSES } from 'utils/constants/styles';
import ChevronDownIcon from 'assets/images/icons/chevron-down.svg';
import CheckIcon from 'assets/images/icons/check.svg';

// MEMO: inspired by https://mui.com/customization/dark-mode/#dark-mode-with-custom-palette
const DISABLED_TEXT_CLASSES = clsx(
  'text-black',
  'text-opacity-25',
  'dark:text-white',
  'dark:text-opacity-30'
);

const HOVER_INVERTED_CLASSES = clsx(
  'hover:outline-none',
  'hover:bg-black',
  'hover:text-white'
);

const WIDTH_CLASSES = 'w-48';

// TODO: type properly

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
type CustomSelectLabelProps = Props<typeof Listbox.Label>

const CustomSelectLabel = ({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  className,
  ...rest
}: CustomSelectLabelProps): JSX.Element => (
  <Listbox.Label
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    className={clsx(
      'block',
      'text-sm',
      'font-medium',
      // TODO: add text styling
      'mb-1',
      className
    )}
    {...rest} />
);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
type CustomSelectButtonProps = Props<typeof Listbox.Button> & {
  isOpen: boolean;
}

const CustomSelectButton = ({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  className,
  children,
  isOpen,
  ...rest
}: CustomSelectButtonProps): JSX.Element => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  <Listbox.Button
    className={clsx(
      HOVER_INVERTED_CLASSES,
      { 'text-stormGray-900': !isOpen },
      { [clsx(
        'outline-none',
        'bg-black',
        'text-white'
      )]: isOpen },
      'relative',
      'pl-3.5',
      'pr-10',
      'py-2.5',
      'text-left',
      'cursor-pointer',
      'rounded-lg',
      BORDER_CLASSES,
      'shadow-sm',
      'whitespace-nowrap',
      WIDTH_CLASSES,
      className
    )}
    {...rest}>
    {children}
    <span
      className={clsx(
        'ml-2',
        'absolute',
        'inset-y-0',
        'right-0',
        'flex',
        'items-center',
        'pr-3',
        'pointer-events-none'
      )}>
      <ChevronDownIcon
        width={20}
        height={20}
        aria-hidden='true' />
    </span>
  </Listbox.Button>
);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
interface CustomSelectOptionsProps extends Props<typeof Listbox.Options> {
  open: boolean;
}

const CustomSelectOptions = ({
  open,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  className,
  ...rest
}: CustomSelectOptionsProps): JSX.Element => (
  <Transition
    show={open}
    as={React.Fragment}
    enter='transition-opacity duration-150 ease-in'
    enterFrom='opacity-0'
    enterTo='opacity-100'
    leave='transition-opacity  duration-300 ease-out'
    leaveFrom='opacity-100'
    leaveTo='opacity-0'>
    <Listbox.Options
      static
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      className={clsx(
        'absolute',
        'top-12',
        'left-0',
        'z-customSpeedDial',
        'py-4',
        WIDTH_CLASSES,
        'max-h-56',
        'overflow-auto',
        'space-y-2',
        'bg-white/90',
        'border',
        'border-black/5',
        'backdrop-blur-sm',
        className
      )}
      {...rest} />
  </Transition>
);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
type CustomSelectOptionProps = Props<typeof Listbox.Option>

const CustomSelectOption = ({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  value,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  className,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  disabled,
  ...rest
}: CustomSelectOptionProps): JSX.Element => (
  <Listbox.Option
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    className={({ active }) =>
      clsx(
        active ?
          '' : // MEMO: add CSS when necessary
          disabled ?
            DISABLED_TEXT_CLASSES : // TODO: double-check with the design
            '', // MEMO: add CSS when necessary
        'cursor-pointer',
        'hover:bg-black/5',
        'select-none',
        'relative',
        'px-6',
        'py-1',
        'flex',
        'items-center',
        className
      )
    }
    value={value}
    disabled={disabled}
    {...rest} />
);

type CustomSelectBodyProps = React.ComponentPropsWithRef<'div'>

const CustomSelectBody = ({
  className,
  ...rest
}: CustomSelectBodyProps): JSX.Element => (
  <div
    className={clsx('relative', className)}
    {...rest} />
);

interface CustomSelectCheckProps extends React.ComponentPropsWithRef<'span'> {
  active: boolean;
}

const CustomSelectCheck = ({
  active,
  className,
  ...rest
}: CustomSelectCheckProps): JSX.Element => (
  <span
    className={clsx(
      active ? '' : '', // MEMO: add CSS when necessary
      'absolute',
      'inset-y-0',
      'right-0',
      'flex',
      'items-center',
      'pr-6',
      className
    )}
    {...rest}>
    <CheckIcon
      className='text-stormGray-900'
      width={16}
      height={17}
      aria-hidden='true' />
  </span>
);

interface CustomSelectTextProps extends React.ComponentPropsWithRef<'span'> {
  selected?: boolean;
}

const CustomSelectText = ({
  selected = false,
  className,
  ...rest
}: CustomSelectTextProps): JSX.Element => (
  <span
    className={clsx(
      selected ? '' : '', // MEMO: add CSS when necessary
      'block',
      'truncate',
      className
    )}
    {...rest} />
);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
type CustomSelectProps = Props<typeof Listbox>

const CustomSelect = ({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  value,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  onChange,
  children,
  ...rest
}: CustomSelectProps): JSX.Element => {
  return (
    <Listbox
      value={value}
      onChange={onChange}
      {...rest}>
      {children}
    </Listbox>
  );
};

export type { CustomSelectProps };

export {
  CustomSelectLabel,
  CustomSelectButton,
  CustomSelectOptions,
  CustomSelectOption,
  CustomSelectBody,
  CustomSelectCheck,
  CustomSelectText
};

export default CustomSelect;
