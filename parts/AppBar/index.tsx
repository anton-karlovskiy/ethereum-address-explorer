import * as React from 'react';
import { Disclosure } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';

import BlockchainLogo from 'components/BlockchainLogo';
import CustomRouterLink from 'components/UI/CustomRouterLink';
import { LAYOUT_SIDE_PADDING_CLASSES } from 'utils/constants/styles';

// TODO: not used for now
const RESOURCES: Array<{
  title: string;
  link: string;
}> = [];

interface Props extends React.ComponentPropsWithRef<'div'> {
  appBarHeight: number;
}

const MOBILE_NAVIGATION_UI_X_MARGIN_CLASS = 'mx-7';

const AppBar = ({
  appBarHeight,
  ...rest
}: Props): JSX.Element => {
  const [isScrollAtTheTop, setIsScrollAtTheTop] = React.useState(
    window.pageYOffset === 0
  );

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setIsScrollAtTheTop(window.pageYOffset === 0);
  };

  return (
    <Disclosure
      as='div'
      {...rest}>
      {({ open }) => (
        <nav
          className={clsx(
            // This CSS is only necessary on desktop view
            'sm:fixed',
            'sm:top-0',
            'sm:right-0',
            'sm:left-0',
            'sm:z-customAppBar'
          )}>
          <div
            className={clsx(
              // This CSS is only necessary on mobile view
              {
                [clsx(
                  MOBILE_NAVIGATION_UI_X_MARGIN_CLASS,
                  'bg-white'
                )]: open
              },
              // This CSS is only necessary on desktop view
              'sm:transition-all',
              'sm:delay-150',
              'sm:duration-700',
              'sm:ease-in-out',
              {
                [clsx(
                  'sm:bg-white',
                  'sm:shadow-[0px_0px_12px_rgba(0,0,0,0.15)]',
                  'sm:backdrop-blur-[20px]'
                )]: isScrollAtTheTop === false
              },
              {
                [clsx(
                  'sm:shadow-[0px_0px_12px_rgba(0,0,0,0)]',
                  'sm:backdrop-blur-[0px]'
                )]: isScrollAtTheTop === true
              }
            )}>
            <div
              style={{ height: appBarHeight }}
              className={clsx(
                'flex',
                'justify-between',
                'items-center',
                LAYOUT_SIDE_PADDING_CLASSES
              )}>
              <div
                className={clsx(
                  'flex',
                  'justify-between',
                  'items-center',
                  'sm:w-full'
                )}>
                <BlockchainLogo activeClassName='' />
                <div
                  className={clsx(
                    'hidden',
                    'sm:ml-6',
                    'sm:flex',
                    'sm:space-x-8'
                  )}>
                  {RESOURCES.map(item => {
                    return (
                      <CustomRouterLink
                        activeClassName=''
                        key={item.title}
                        href={item.link}>
                        {item.title}
                      </CustomRouterLink>
                    );
                  })}
                </div>
              </div>
              {/* Mobile menu button */}
              <Disclosure.Button
                className={clsx(
                  'sm:hidden',
                  'inline-flex',
                  'items-center',
                  'justify-center',
                  'p-2',
                  'rounded-md',
                  'focus:outline-none',
                  'focus:ring-2',
                  'focus:ring-inset'
                )}>
                <span className='sr-only'>Open main menu</span>
                {open ? (
                  <XMarkIcon
                    className={clsx(
                      'block',
                      'h-8',
                      'w-8'
                    )}
                    aria-hidden='true' />
                ) : (
                  <Bars3Icon
                    className={clsx(
                      'block',
                      'h-8',
                      'w-8'
                    )}
                    aria-hidden='true' />
                )}
              </Disclosure.Button>
            </div>
          </div>
          <Disclosure.Panel className='sm:hidden'>
            <div
              className={clsx(
                'pt-2',
                'pb-3',
                'space-y-1'
              )}>
              {RESOURCES.map(item => {
                return (
                  <CustomRouterLink
                    activeClassName=''
                    key={item.title}
                    href={item.link}>
                    {item.title}
                  </CustomRouterLink>
                );
              })}
            </div>
          </Disclosure.Panel>
        </nav>
      )}
    </Disclosure>
  );
};

export default AppBar;
