const getNumberFormatInstance = (
  localses?: string | string[] | undefined,
  options?: Intl.NumberFormatOptions | undefined
): Intl.NumberFormat => {
  return new Intl.NumberFormat(localses, options);
};

const usdFormatInstance = getNumberFormatInstance(undefined, {
  style: 'currency',
  currency: 'USD'
});

export {
  getNumberFormatInstance,
  usdFormatInstance
};
