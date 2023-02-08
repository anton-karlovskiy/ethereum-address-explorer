import clsx from 'clsx';

import AnchorLink from 'components/UI/CustomAnchorLink';

interface Props {
  error: Error;
  resetErrorBoundary?: () => void;
}

const handleRefresh = () => {
  window.location.reload();
};

const ErrorFallback = ({ error, resetErrorBoundary }: Props): JSX.Element => {
  return (
    <p className={clsx('text-alizarinCrimson', 'space-x-1')}>
      <span>Error: {error.message}.</span>
      <span>
        Please&nbsp;
        <AnchorLink
          onClick={resetErrorBoundary ?? handleRefresh}
          className={clsx('underline', 'cursor-pointer')}>
          refresh
        </AnchorLink>
        .
      </span>
    </p>
  );
};

export default ErrorFallback;
