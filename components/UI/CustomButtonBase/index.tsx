import * as React from 'react';
import clsx from 'clsx';

interface Props extends React.ComponentPropsWithRef<'button'> {
  disabled?: boolean;
}

type Ref = HTMLButtonElement;
const CustomButtonBase = React.forwardRef<Ref, Props>(({
  disabled = false,
  className,
  children,
  ...rest
}, ref): JSX.Element => (
  <button
    ref={ref}
    className={clsx(
      'select-none',
      'transition-colors',
      'inline-flex',
      'items-center',
      'text-center',
      { 'pointer-events-none': disabled },
      className
    )}
    {...rest}>
    {children}
  </button>
));
CustomButtonBase.displayName = 'CustomButtonBase';

export type { Props };

export default CustomButtonBase;
