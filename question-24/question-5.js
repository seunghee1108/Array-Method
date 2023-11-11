// 문제 5번 : 배열의 일부를 얕은 복사본으로 추출하고 새로운 배열 객체로 반환하는 메서드는 무엇인가요?

const pokemon = ["이상해씨", "파이리", "꼬부기", "이브이", "피오네"]
const selectedPokemon = pokemon.slice(1, 4);

console.log(selectedPokemon);
// [ '파이리', '꼬부기', '이브이' ]

const fruits = ["사과", "오렌지", "포도", "체리"]
const selectedFruits = fruits.slice(0, 2);

console.log(selectedFruits);
// ['사과', '오렌지']
