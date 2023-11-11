// 문제 7번 : 두 개 이상의 배열을 결합하여 새 배열을 만드는 메서드는 무엇인가요?

const array1 = [1, 2, 3];
const array2 = [4, 5];
const array3 = ['a', 'b'];

const array4 = array1.concat(array2, array3);

console.log(array4); 
// [
//   1, 2, 3, 4,
//   5, 'a', 'b'
// ]

const array5 = array1.concat(array2, array3);
console.log(array5);
// [
//   1, 2, 3, 4,
//   5, 'a', 'b'
// ]