import clsx from 'clsx';

type Props = React.ComponentPropsWithRef<'div'>;

const CustomPanel = ({
  className,
  ...rest
}: Props): JSX.Element => (
  <div
    className={clsx(
      'bg-stormGray-50',
      className
    )}
    {...rest} />
);

export type {
  Props
};

export default CustomPanel;
