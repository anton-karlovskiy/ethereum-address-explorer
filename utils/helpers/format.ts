const getUSDCFormatInstance = (
  localses?: string | string[] | undefined,
  options?: Intl.NumberFormatOptions | undefined
): Intl.NumberFormat => {
  return new Intl.NumberFormat(localses, options);
};

export {
  getUSDCFormatInstance
};
