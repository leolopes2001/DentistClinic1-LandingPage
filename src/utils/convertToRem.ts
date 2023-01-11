const convertToRem = (size: number, context: number = 16): string => {
  return size / context + 'rem';
};
export default convertToRem;
