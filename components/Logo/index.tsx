import CustomRouterLink, { Props as CustomRouterLinkProps } from 'components/UI/CustomRouterLink';
import { PAGES } from 'utils/constants/links';
import Image from 'next/image';

type Props = Omit<CustomRouterLinkProps, 'href' | 'children'>;

const Logo = (props: Props) => {
  return (
    <CustomRouterLink
      href={PAGES.HOME}
      {...props}>
      <Image
        alt='IntelliXwap Logo'
        src='/images/logo-with-title.png'
        width={150}
        height={50} />
    </CustomRouterLink>
  );
};

export default Logo;
