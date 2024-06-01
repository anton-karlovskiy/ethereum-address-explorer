import * as React from 'react';
import clsx from 'clsx';

import { BORDER_CLASSES } from 'utils/constants/styles';
import styles from './custom-input.module.css';

type Ref = HTMLInputElement;
const CustomInput = React.forwardRef<Ref, Props>(({
  className,
  ...rest
}, ref): JSX.Element => (
  <input
    ref={ref}
    type='text'
    className={clsx(
      styles.customInput,
      'focus:ring',
      'focus:border-primary-300',
      'focus:ring-primary-200',
      'focus:ring-opacity-50',
      'block',
      'w-full',
      'text-base',
      BORDER_CLASSES,
      'shadow-sm',
      'rounded',
      'placeholder-gray-300',
      'bg-transparent',
      'border',
      'border-[#c2e0ff14]',
      className
    )}
    {...rest} />
));
CustomInput.displayName = 'CustomInput';

export type Props = React.ComponentPropsWithRef<'input'>;

export default CustomInput;
