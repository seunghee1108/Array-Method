// 문제 10번 : 배열의 요소를 적절한 위치에 정렬하는 메서드는 무엇인가요?

const fruits = ["사과", "바나나", "체리", "딸기"];
fruits.sort();

console.log(fruits);  // ["딸기", "바나나", "사과", "체리"]

const pokemon = ["꼬부기", "파이리", "이상해꽃"];
pokemon.sort();

console.log(pokemon); //  '꼬부기', '이상해꽃', '파이리' ]


// 숫자 배열은 오름차순으로 정렬
const numbers = [10, 5, 8, 2, 1];
numbers.sort((a, b) => a - b);

console.log(numbers);  // [1, 2, 5, 8, 10]