const FizzBuzz = (num) => {
    if (num === 0) return 0;
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return num;
};

// Fazendo o coverage quebrar e o husky não deixar dar push
// const test = () => 'dasds';

// export { test };
export default FizzBuzz;
