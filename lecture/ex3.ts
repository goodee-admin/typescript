/*
    6. 객체타입
*/

const person = {
    birth: 2000,
    name : "조로",
};
console.log("typeof person:", typeof person); // object
console.log("typeof person.birth:", typeof person.birth); // number
console.log("typeof person.name:", typeof person.name); // string
// console.log(person.home); // Error - '{ birth: number; name: string; }' 형식에 'home' 속성이 없습니다.

/*
    - 객체 타입 선언
*/