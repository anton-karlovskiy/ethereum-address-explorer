import * as React from 'react';
import clsx from 'clsx';

import { LAYOUT } from 'utils/constants/styles';

interface Props {
  children: React.ReactNode;
}

const Banner = ({
  children
}: Props) => {
  return (
    <div
      className={clsx(
        'absolute',
        'left-0',
        'right-0',
        'min-h-[72px]',
        'md:min-h-14',
        'bg-primary-500',
        'flex',
        'items-center',
        'overflow-visible',
        'z-customSpeedDial',
        'px-12',
        'py-4'
      )}
      style={{
        top: LAYOUT.APP_BAR_HEIGHT
      }}>
      {children}
    </div>
  );
};

export default Banner;
