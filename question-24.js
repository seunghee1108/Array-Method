// 문제 24번 : 지정된 깊이까지 재귀적으로 평탄화하여 새 배열을 생성하는 메서드는 무엇인가요?

const nestedArray = [1, [2, [3, [4, 5]]]];
const flattenedArray = nestedArray.flat(2);

console.log(flattenedArray);  // [ 1, 2, 3, [ 4, 5 ] ]

