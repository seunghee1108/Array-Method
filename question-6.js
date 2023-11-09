// 문제 6번 : 배열의 기본 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경하는 메서드는 무엇인가요?

const pokemon = ["이상해씨", "파이리", "꼬부기", "이브이", "피오네"]

pokemon.splice(0, 1, "이상해꽃"); // index 0부터 1개 교체
console.log(pokemon);
// [ '이상해꽃', '파이리', '꼬부기', '이브이', '피오네' ]

pokemon.splice(2, 2); // index 2부터 2개  삭제
console.log(pokemon);
// [ '이상해씨', '파이리', '피오네' ]

pokemon.splice(1, 1, "러브로스", "메타몽"); // index 1부터 1개 교체
console.log(pokemon);
// [ '이상해씨', '러브로스', '메타몽', '피오네' ]

