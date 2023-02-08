import clsx from 'clsx';

import CustomAnchorLink, { Props as CustomAnchorLinkProps } from 'components/UI/CustomAnchorLink';
import ExternalLinkMark from 'components/UI/CustomExternalLink/ExternalLinkMark';

type Props = CustomAnchorLinkProps;

const CustomExternalLink = ({
  children,
  className,
  ...rest
}: Props) => {
  return (
    <CustomAnchorLink
      className={clsx(
        'inline-flex',
        'items-center',
        'space-x-1',
        className
      )}
      target='_blank'
      rel='noopener noreferrer'
      {...rest}>
      <span>{children}</span>
      <ExternalLinkMark className='text-black' />
    </CustomAnchorLink>
  );
};

export type { Props };

export default CustomExternalLink;
