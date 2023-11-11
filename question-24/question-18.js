// 문제 18번 : 배열의 어떤 요소라도 주어진 테스트 함수를 통과하는지 테스트하는 메서드는 무엇인가요?

const fruits = ["사과", "바나나", "딸기", "포도"];
// some() 메서드를 사용하여 배열에 "딸기"가 포함되어 있는지 확인
const hasStrawberry = fruits.some(fruit => fruit === "딸기");

console.log(hasStrawberry);  // true (배열에 "딸기"가 포함되어 있음)


const numbers = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers.some(number => number % 2 === 0);  // 배열의 요소 중 짝수가 있는지 확인

console.log(hasEvenNumber);  // true