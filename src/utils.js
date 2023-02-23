const generateRandomNumberWithMaxLimit = (maxLimit) => {
  let number = Math.random() * maxLimit;
  number = Math.floor(number);

  return number;
};

export { generateRandomNumberWithMaxLimit };
