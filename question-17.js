// 문제 17번 : 배열의 각 요소에 대해 주어진 함수를 실행하는 메서드는 무엇인가요?

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => {
  console.log(number * 2);
});
// 2
// 4
// 6
// 8
// 10



function Func(item) {
  console.log(item);
}
const array = ["사과", "키위", "딸기"];
array.forEach(Func);
// 사과
// 키위
// 딸기
