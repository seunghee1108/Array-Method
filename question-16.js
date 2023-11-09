// 문제 16번 : 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새 배열로 반환하는 메서드는 무엇인가요?

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(number => number * number); // (각 요소를 제곱한 결과가 모인 새 배열)

console.log(squaredNumbers);  // [1, 4, 9, 16, 25] 