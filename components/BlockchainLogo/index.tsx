import CustomRouterLink, { Props as CustomRouterLinkProps } from 'components/UI/CustomRouterLink';
import { PAGES } from 'utils/constants/links';
import BlockchainLogoIcon from 'assets/images/blockchain-logo.svg';

type Props = Omit<CustomRouterLinkProps, 'href' | 'children'>;

const BlockchainLogo = (props: Props) => {
  return (
    <CustomRouterLink
      href={PAGES.HOME}
      {...props}>
      <BlockchainLogoIcon
        width={32}
        height={32} />
    </CustomRouterLink>
  );
};

export default BlockchainLogo;
