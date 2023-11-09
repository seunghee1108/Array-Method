// 문제 15번 : 테스트 함수를 통과하는 모든 요소를 모아 새 배열로 반환하는 메서드는 무엇인가요?

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);  // [2, 4] (짝수만 모인 새 배열)



const array = [5, 17, 8, 130, 44];
const filtered = array.filter((element) => element > 10);

console.log(filtered);
// Expected output:[ 17, 130, 44]