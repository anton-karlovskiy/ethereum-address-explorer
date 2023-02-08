import clsx from 'clsx';

const BasicButton = ({
  className,
  ...rest
}: React.ComponentPropsWithRef<'button'>) => {
  return (
    <button
      className={clsx(
        'border',
        'border-black',
        'p-3',
        'rounded-md',
        'disabled:border-gray-400',
        'disabled:text-gray-400',
        className
      )}
      {...rest} />
  );
};

export default BasicButton;
