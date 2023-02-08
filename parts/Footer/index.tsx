import * as React from 'react';
import clsx from 'clsx';

import { LAYOUT_SIDE_PADDING_CLASSES } from 'utils/constants/styles';

type Ref = HTMLDivElement;
type Props = React.ComponentPropsWithRef<'footer'>;

const Footer = React.forwardRef<Ref, Props>((props, ref): JSX.Element => (
  <footer
    ref={ref}
    aria-labelledby='footerHeading'
    {...props}>
    <h2
      id='footerHeading'
      className='sr-only'>
      Footer
    </h2>
    <div
      className={clsx(
        LAYOUT_SIDE_PADDING_CLASSES
      )}>
      {/* MEMO: placeholder for now */}
    </div>
  </footer>
));
Footer.displayName = 'Footer';

export default Footer;
