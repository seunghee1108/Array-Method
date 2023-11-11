const studentList = [
  "김우진",
  "김현",
  "방승희",
  "변호녕",
  "소사무엘",
  "송영준",
  "신동현",
  "오승민",
  "유승민",
  "윤준현",
  "이민구",
  "이유안",
  "이은정",
  "정영식",
  "최성민",
  "최은철",
  "홍문기"
];


/** 
 * * 다시 확인 해보기
 */

// 같은 이름(성씨제외)을 가진 학생 찾기 
const findSameName = (nameList) => {
  const nameMap = new Map();

  for (const name of nameList) {
    const firstName = name.slice(1); 
    if (nameMap.has(firstName)) {
      console.log(`성을 제외한 동일한 이름을 가진 학생 발견: ${firstName}`);
    }
    nameMap.set(firstName, true);
  }
};

findSameName(studentList);

// 이 중 마지막에 있는 학생의 위치를 찾아 출력
const targetName = "유승민";
const lastIndex = studentList.lastIndexOf(targetName);
console.log(lastIndex);