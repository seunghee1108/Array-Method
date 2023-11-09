// 문제 19번 : 배열의 모든 요소가 주어진 테스트 함수를 통과하는지 테스트하는 메서드는 무엇인가요?

const ages = [25, 30, 22, 28, 35];
// every() 메서드를 사용하여 배열의 모든 요소가 18세 이상인지 확인
const allAdults = ages.every(age => age >= 18);

console.log(allAdults);  // true (배열의 모든 요소가 18세 이상임)


const numbers = [2, 4, 6, 8, 10];
const isAllEven = numbers.every(number => number % 2 === 0);  // 배열의 요소 중 짝수가 있는지 확인

console.log(isAllEven);  // true (모든 요소가 짝수)