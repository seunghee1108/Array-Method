// 문제 1번 : 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새 길이를 반환하는 메서드는 무엇인가요?

const pokemon = ["이상해씨", "파이리"]
const newLength = pokemon.push("꼬부기");

console.log(pokemon);
// [ '이상해씨', '파이리', '꼬부기' ]
console.log(newLength);
// 3 (새로운 배열의 길이)
