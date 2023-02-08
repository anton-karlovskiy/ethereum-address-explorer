import clsx from 'clsx';

import { PAGE_MAIN_CONTENT_Y_PADDING_CLASSES } from 'utils/constants/styles';

const PageMainContentWrapper = ({
  className,
  ...rest
}: React.ComponentPropsWithRef<'div'>) => {
  return (
    <div
      className={clsx(
        PAGE_MAIN_CONTENT_Y_PADDING_CLASSES,
        'space-y-10',
        className
      )}
      {...rest} />
  );
};

export default PageMainContentWrapper;
