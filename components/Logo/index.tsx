import clsx from 'clsx';

import CustomRouterLink, { Props as CustomRouterLinkProps } from 'components/UI/CustomRouterLink';
import { PAGES } from 'utils/constants/links';
import LogoIcon from 'assets/images/logo.svg';

type Props = Omit<CustomRouterLinkProps, 'href' | 'children'>;

const Logo = (props: Props) => {
  return (
    <CustomRouterLink
      className={clsx(
        'flex',
        'items-center',
        'space-x-4'
      )}
      href={PAGES.HOME}
      {...props}>
      <LogoIcon
        width={80}
        height={80}
        viewBox='0 0 900 900' />
      <h2 className='text-2xl font-bold text-white'>PulseX Protocol</h2>
    </CustomRouterLink>
  );
};

export default Logo;
