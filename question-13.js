// 문제 13번 : 주어진 테스트 함수를 만족하는 배열의 첫 번째 요소의 값을 반환하는 메서드는 무엇인가요?

const numbers = [1, 2, 3, 4, 5];
const evenNumber = numbers.find(number => number % 2 === 0);

console.log(evenNumber);  // 2 (첫 번째 짝수인 2를 반환)