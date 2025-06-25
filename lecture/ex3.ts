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


// 객체 타입 선언

let person2: {
    birth: number;
    name: string;
};
person2 = {
    birth : 1999,
    name : "상디",
};

/* 
    - 타입 별칭 
      ex) {birth: number; name: string;}같은 긴 객체리터럴을 짧게 Student라는 별칭으로 사용하기 위함.

    ※ type vs class
      객체 변수 Type을 Alias (별칭)으로 정의해두고 재사용하기 위해 사용한다.
      자바스크립트의(객체지향문법) Class개념, 인스턴스 생성을 목적으로 한다.
*/
type Student = {
    birth: number;
    name: string;
};

let s1: Student;
s1 = {
    birth: 1995,
    name: "로빈",
};


/* 
    7. 구조적 타이핑

    - TypeScript는 타입의 이름이 아닌, 타입의 구조(프로퍼티와 메소드의 형태)를 기준으로 타입의 호환성을 판단한다.
    - 서로 다른 객체라도 가진 속성(이름, 타입)이 동일하다면 타입스크립트는 서로 호환이 가능하다.
*/

type Car = {
    tire: number;
    color: string;
};
type Taxi = {
    tire: number;
};


let c1: Car = {
    tire: 4,
    color: "",
}

let c2: Taxi = {
    tire: 0
};

c2 = c1;
console.log("c2.tire:", c2.tire); // 4
// c1 = c2; // Error - 'color' 속성이 'Taxi' 형식에 없지만 'Car' 형식에서 필수입니다.


// 좀 더 자세한 내용은 interface, class 수업 이후에 진행한다.
class Dog {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Cat {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let dog: Dog = new Dog("진돗개", 1);
let cat: Cat = dog; // cat과 dog 다른 타입이지만 구조가 동일해 호환이 된다.

console.log(dog);
console.log(cat);