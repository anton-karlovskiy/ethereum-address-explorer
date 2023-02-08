import * as React from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

import CustomAnchorLink from 'components/UI/CustomAnchorLink';

interface Props extends LinkProps {
  className?: string;
  activeClassName: string;
  children: React.ReactNode;
}

// MEMO: inspired by https://github.com/vercel/next.js/blob/canary/examples/active-class-name/components/ActiveLink.tsx
const CustomRouterLink = ({
  href,
  className,
  activeClassName,
  children,
  ...rest
}: Props): JSX.Element => {
  const {
    asPath,
    isReady
  } = useRouter();
  const [computedClassName, setComputedClassName] = React.useState(className);

  React.useEffect(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      // Dynamic route will be matched via `rest.as`
      // Static route will be matched via `href`
      const linkPathname = new URL(
        (rest.as || href) as string,
        // eslint-disable-next-line no-restricted-globals
        location.href
      ).pathname;

      // Using URL().pathname to get rid of query and hash
      // eslint-disable-next-line no-restricted-globals
      const activePathname = new URL(asPath, location.href).pathname;

      const newClassName =
        linkPathname === activePathname ?
          `${className} ${activeClassName}`.trim() :
          className;

      if (newClassName !== computedClassName) {
        setComputedClassName(newClassName);
      }
    }
  }, [
    asPath,
    isReady,
    rest.as,
    href,
    activeClassName,
    className,
    computedClassName
  ]);

  return (
    <Link
      href={href}
      passHref
      {...rest}>
      <CustomAnchorLink className={computedClassName}>{children}</CustomAnchorLink>
    </Link>
  );
};

export type { Props };

export default CustomRouterLink;
