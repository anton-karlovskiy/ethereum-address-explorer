import Breadcrumbs, { BreadcrumbsProps } from 'nextjs-breadcrumbs';
import clsx from 'clsx';

const BREADCRUMBS_TEXT_COLOR_CLASSES = 'text-fiord-900';
const BREADCRUMBS_X_SPACING_CLASSES = 'space-x-4';

const CustomBreadcrumbs = (props: BreadcrumbsProps) => {
  return (
    <Breadcrumbs
      omitRootLabel
      labelsToUppercase
      listClassName={clsx(
        'flex',
        'items-center',
        BREADCRUMBS_X_SPACING_CLASSES,
        'first:uppercase'
      )}
      containerClassName={clsx(
        'font-semibold',
        BREADCRUMBS_TEXT_COLOR_CLASSES
      )}
      activeItemClassName={clsx(
        'text-blueRibbon-500'
      )}
      {...props} />
  );
};

export {
  BREADCRUMBS_X_SPACING_CLASSES,
  BREADCRUMBS_TEXT_COLOR_CLASSES
};

export default CustomBreadcrumbs;
