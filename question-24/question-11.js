// 문제 11번 : 배열에서 지정된 요소를 찾고, 그 인덱스를 반환하는 메서드는 무엇인가요?

const pokemon = ["꼬부기", "파이리", "이상해꽃"];
const index = pokemon.indexOf('이상해꽃');

console.log(index); // 2


const pokemonTwo = ["꼬부기", "파이리", "이상해꽃"];
const indexTwo = pokemonTwo.indexOf('이브이');

console.log(indexTwo); // -1