// 문제 20번  배열의 각 요소에 대해 주어진 리듀서(reducer)함수를 실행하고 하나의 결과값을 반환하는 메서드는 무엇인가요?

const numbers = [1, 2, 3, 4, 5];

// reduce() 메서드를 사용하여 배열의 모든 요소를 곱함
const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(product);  // 120 (1 * 2 * 3 * 4 * 5)