import * as React from 'react';
import clsx from 'clsx';

import CustomButtonBase, { Props as CustomButtonBaseProps } from 'components/UI/CustomButtonBase';
import { HOVER_BACKGROUND_CLASSES } from 'utils/constants/styles';
import SpinIcon from 'assets/images/icons/spin.svg';

interface Props extends CustomButtonBaseProps {
  pending?: boolean;
}

type Ref = HTMLButtonElement;
const IconButton = React.forwardRef<Ref, Props>(({
  children,
  disabled = false,
  pending = false,
  className,
  ...rest
}, ref): JSX.Element => {
  const disabledOrPending = disabled || pending;

  return (
    <CustomButtonBase
      ref={ref}
      className={clsx(
        'focus:outline-none',
        'focus:ring-1',
        'focus:border-blue-300', // TODO: update with a branding color
        'focus:ring-blue-200', // TODO: update with a branding color
        'focus:ring-opacity-50',

        'rounded-full',
        'justify-center',
        HOVER_BACKGROUND_CLASSES,
        className
      )}
      disabled={disabledOrPending}
      {...rest}>
      {pending ? (
        <SpinIcon
          className={clsx(
            'animate-spin',
            'w-4',
            'h-4'
          )} />
      ) : children}
    </CustomButtonBase>
  );
});
IconButton.displayName = 'IconButton';

export type { Props };

export default IconButton;
