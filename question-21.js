// 문제 21번 : reduce()와 같지만 배열의 끝에서부터 함수를 적용하는 메서드는 무엇인가요?

const numbers = [1, 2, 3, 4, 5];
const reversedSum = numbers.reduceRight((accumulator, currentNumber) => accumulator + currentNumber, 0);

console.log(reversedSum);  // 15 (모든 요소의 합, 역방향으로 적용)
