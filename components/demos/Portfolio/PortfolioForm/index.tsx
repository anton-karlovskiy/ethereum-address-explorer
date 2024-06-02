import { isAddress } from '@ethersproject/address';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';

import CustomContainedButton from 'components/buttons/CustomContainedButton';
import CustomInput from 'components/UI/CustomInput';

const ETHEREUM_ACCOUNT_ADDRESS = 'ethereum-account-address';

type FormData = {
  [ETHEREUM_ACCOUNT_ADDRESS]: string;
};

interface Props {
  setEthereumAccountAddress: React.Dispatch<React.SetStateAction<string | undefined>>;
  isInitialLoading: boolean;
}

const PortfolioForm = ({
  setEthereumAccountAddress,
  isInitialLoading
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    mode: 'onChange' // 'onBlur'
  });

  const validateForm = (value: string): string | undefined => {
    if (!isAddress(value)) {
      return 'Please enter a valid Base account address.';
    }
    return undefined;
  };

  const onSubmit = async (data: FormData) => {
    setEthereumAccountAddress(data[ETHEREUM_ACCOUNT_ADDRESS]);
  };

  return (
    <form
      className={clsx(
        'space-y-1'
      )}
      onSubmit={handleSubmit(onSubmit)}>
      <label
        htmlFor={ETHEREUM_ACCOUNT_ADDRESS}
        className={clsx(
          'text-sm',
          'px-1.5'
        )}>
        Base account address
      </label>
      <div
        className={clsx(
          'flex',
          'items-center',
          'justify-between',
          'space-x-2'
        )}>
        <CustomInput
          id={ETHEREUM_ACCOUNT_ADDRESS}
          {...register(ETHEREUM_ACCOUNT_ADDRESS, {
            required: {
              value: true,
              message: 'Please enter an Base account address.'
            },
            validate: value => validateForm(value)
          })} />
        <CustomContainedButton
          className={clsx(
            'flex-shrink-0',
            'w-28'
          )}
          type='submit'
          pending={isInitialLoading}>
          Submit
        </CustomContainedButton>
      </div>
      <p
        role='alert'
        aria-labelledby={ETHEREUM_ACCOUNT_ADDRESS}
        className={clsx(
          'text-sm',
          'px-1.5',
          'h-6',
          'text-red-500'
        )}>
        {errors[ETHEREUM_ACCOUNT_ADDRESS]?.message}
      </p>
    </form>
  );
};

export default PortfolioForm;
