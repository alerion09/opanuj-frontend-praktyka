export const validateIsInteger = (value: string) => {
  return value !== '' && Number.isInteger(Number(value));
};
