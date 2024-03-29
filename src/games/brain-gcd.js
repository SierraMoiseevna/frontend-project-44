import getRandomInt from '../utils.js';

const calcLargestCommonDivisor = (num1, num2) => {
  let number1 = num1;
  let number2 = num2;
  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }
  return number1 + number2;
};

const largestCommonDivisor = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  const question = `Question: ${num1} ${num2}`;
  const correctAnswer = calcLargestCommonDivisor(num1, num2);
  return [question, String(correctAnswer)];
};
const message = 'Find the greatest common divisor of given numbers.';

export { largestCommonDivisor, message };
