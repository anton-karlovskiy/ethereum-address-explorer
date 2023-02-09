import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName
} from 'wagmi';
import clsx from 'clsx';

import BasicButton from 'components/buttons/BasicButton';

const Wagmi = () => {
  const {
    address,
    connector,
    isConnected
  } = useAccount();

  const { data: ensAvatar } = useEnsAvatar({ address });

  const { data: ensName } = useEnsName({ address });

  const {
    connect,
    connectors,
    error,
    isLoading,
    pendingConnector
  } = useConnect();

  const { disconnect } = useDisconnect();

  if (isConnected) {
    if (!connector) {
      throw new Error('Something went wrong!');
    }

    return (
      <div>
        {ensAvatar && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={ensAvatar}
            alt='ENS Avatar' />
        )}
        <div>{ensName ? `${ensName} (${address})` : address}</div>
        <div>Connected to {connector.name}</div>
        <BasicButton
          onClick={() => disconnect()}>
          Disconnect
        </BasicButton>
      </div>
    );
  }

  return (
    <div>
      <ul
        className={clsx(
          'max-w-xs',
          'space-y-4'
        )}>
        {connectors.map(connector => (
          <li
            key={connector.id}>
            <BasicButton
              className={clsx(
                'w-full'
              )}
              disabled={!connector.ready}
              onClick={() => connect({ connector })}>
              {connector.name}
              {!connector.ready && ' (unsupported)'}
              {isLoading && connector.id === pendingConnector?.id && ' (connecting)'}
            </BasicButton>
          </li>
        ))}
      </ul>
      {error && <p role='alert'>{error.message}</p>}
    </div>
  );
};

export default Wagmi;
