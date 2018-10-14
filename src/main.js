export default {
    sum: (num1, num2) => num1 + num2,
    sub: (num1, num2) => num1 - num2,
    div: (num1, num2) => ((num2 === 0) ? 'Can not to devide any number per zero' : num1 / num2),
    mult: (num1, num2) => num1 * num2,
};
