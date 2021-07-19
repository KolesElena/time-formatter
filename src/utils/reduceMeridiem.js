export default (input = '') => {
  const pattern = new RegExp(/[0-9]\s*[a,p][m]/gi);
  const hasMeridiem = pattern.test(input);

  if (hasMeridiem) return input.replace(/[a,p][m]/gi, (meridiem) => meridiem.substring(0, 1));
  return input;
};
