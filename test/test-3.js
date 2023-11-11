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

// 세 번째 학생 제거  
const removedStudent = studentList.splice(2, 1);

// 새 학생 추가
const newStudent = "공욱재";

studentList.splice(2, 0, newStudent);

console.log("제거된 학생:", removedStudent);
console.log("새 학생 추가 후 명단:", studentList);

