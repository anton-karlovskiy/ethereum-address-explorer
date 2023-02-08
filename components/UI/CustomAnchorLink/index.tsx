import * as React from 'react';
import clsx from 'clsx';

const CustomAnchorLink = React.forwardRef<HTMLAnchorElement, Props>(
  ({
    className,
    children,
    ...rest
  }, ref): JSX.Element => (
    <a
      ref={ref}
      className={clsx(
        'px-1',
        'py-0.5',
        'hover:bg-black/5',
        className
      )}
      {...rest}>
      {children}
    </a>
  )
);
CustomAnchorLink.displayName = 'CustomAnchorLink';

export type Props = React.ComponentPropsWithRef<'a'>;

export default CustomAnchorLink;
