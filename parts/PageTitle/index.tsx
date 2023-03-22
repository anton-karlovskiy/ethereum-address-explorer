import clsx from 'clsx';

const PageTitle = ({
  className,
  children
}: React.ComponentPropsWithRef<'h1'>) => {
  return (
    <h1
      className={clsx(
        'text-2xl',
        'text-center',
        'sm:text-left',
        'sm:text-5xl',
        'font-bold',
        'text-fiord-800',
        className
      )}>
      {children}
    </h1>
  );
};

export default PageTitle;
