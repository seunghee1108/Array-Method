// 문제 23번 : 먼저 주어진 함수를 배열의 각 요소에 매핑한 다음 결과를 새 배열로 평탄화하는 메서드는 무엇인가요?

const numbers = [1, 2, 3, 4, 5];
const doubledAndFlattened = numbers.flatMap(number => [number, number * 2]);

console.log(doubledAndFlattened);  // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10] (각 요소를 2배로 늘린 후 평탄화)


const array = [1, 2, 3, 4, 5];
const flatNestedSquares = array.flatMap(function(number) {
  return [number * number];
});

console.log(flatNestedSquares);
// [ 1, 4, 9, 16, 25 ]
