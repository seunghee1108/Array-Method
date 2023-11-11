// 문제 4번 : 배열의 시작에 하나 이상의 요소를 추가하고, 배열의 새 길이를 반환하는 메서드는 무엇인가요?

const pokemon = ["이상해씨", "파이리", "꼬부기"]
const newLength = pokemon.unshift("이브이");

console.log(pokemon);
// [ '이브이', '이상해씨', '파이리', '꼬부기' ]
console.log(newLength);
// 4