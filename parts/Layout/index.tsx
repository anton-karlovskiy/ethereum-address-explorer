import dynamic from 'next/dynamic';
import { useMeasure } from 'react-use';
import clsx from 'clsx';

import Footer from 'parts/Footer';
import { LAYOUT } from 'utils/constants/styles';

const DynamicAppBar = dynamic(() => import('parts/AppBar'), { ssr: false });

const Layout = ({
  className,
  children,
  ...rest
}: React.ComponentPropsWithRef<'div'>): JSX.Element => {
  const [ref, { height: footerHeight }] = useMeasure<HTMLDivElement>();

  return (
    <div
      className={clsx(
        'relative',
        'min-h-screen',
        className
      )}
      {...rest}>
      <DynamicAppBar appBarHeight={LAYOUT.APP_BAR_HEIGHT} />
      <main
        style={{
          paddingBottom: footerHeight
        }}>
        {children}
      </main>
      <Footer
        ref={ref}
        className={clsx(
          'absolute',
          'bottom-0',
          'w-full'
        )} />
    </div>
  );
};

export default Layout;
