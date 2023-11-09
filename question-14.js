// 문제 14번 : 주어진 테스트 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환하는 메서드는 무엇인가요?

const numbers = [1, 2, 3, 4, 5];
const evenIndex = numbers.findIndex(number => number % 2 === 0); // 짝수를 찾는 테스트 함수

console.log(evenIndex);  // 1 (첫 번째 짝수의 인덱스)



const array = [5, 17, 8, 30, 44];
const found = array.findIndex((element) => element > 10); //  10보다 큰 첫 번째 요소의 인덱스

console.log(found); // 1