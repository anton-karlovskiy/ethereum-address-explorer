import CustomRouterLink, { Props as CustomRouterLinkProps } from 'components/UI/CustomRouterLink';
import { PAGES } from 'utils/constants/links';
import LogoIcon from 'assets/images/logo.svg';

type Props = Omit<CustomRouterLinkProps, 'href' | 'children'>;

const Logo = (props: Props) => {
  return (
    <CustomRouterLink
      href={PAGES.HOME}
      {...props}>
      <LogoIcon
        width={58}
        height={50} />
    </CustomRouterLink>
  );
};

export default Logo;
