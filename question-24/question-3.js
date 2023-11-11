// 문제 3번 : 배열에서 첫 번째 요소를 제거하고 그 요소를 반환하는 메서드는 무엇인가요?

const pokemon = ["이상해씨", "파이리", "꼬부기"]
const removePokemon = pokemon.shift();

console.log(pokemon);
// [ '파이리', '꼬부기' ]
console.log(removePokemon);
// 이상해씨