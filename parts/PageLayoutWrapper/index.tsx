import { LAYOUT } from 'utils/constants/styles';

const PageLayoutWrapper = ({
  style,
  ...rest
}: React.ComponentPropsWithRef<'div'>) => {
  return (
    <div
      style={{
        ...style,
        paddingTop: LAYOUT.APP_BAR_HEIGHT
      }}
      {...rest} />
  );
};

export default PageLayoutWrapper;
