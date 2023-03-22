import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from 'react-super-responsive-table';
import clsx from 'clsx';

const CustomTable = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'table'>) => (
  <Table
    className={clsx(className)}
    {...rest} />
);

const CustomTbody = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'tbody'>) => (
  <Tbody
    className={clsx(
      'text-[#b2bac2]',
      'text-sm',
      className
    )}
    {...rest} />
);

const CustomTr = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'tr'>) => (
  <Tr
    className={clsx(
      'py-4',
      'md:py-0',
      'space-y-2',
      'md:space-y-0',
      'border-b',
      'border-gray-200',
      className
    )}
    {...rest} />
);

const CustomTd = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'td'>) => (
  <Td
    className={clsx(
      'py-3.5',
      'first:font-medium',
      className
    )}
    {...rest} />
);

const CustomTh = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'th'>) => (
  <Th
    className={clsx(
      'py-2',
      'text-left',
      className
    )}
    {...rest} />
);

const CustomThead = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'thead'>) => (
  <Thead
    className={clsx(
      'md:text-[#b2bac2]',
      'font-medium',
      'text-xs',
      className
    )}
    {...rest} />
);

export {
  CustomThead,
  CustomTh,
  CustomTd,
  CustomTr,
  CustomTbody
};

export default CustomTable;
