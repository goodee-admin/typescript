/*
    8. 선택적 속성(옵셔널 프로퍼티, Optional Properties) 

    - ? 키워드를 사용하여 선택적 속성(있어도되고 없어도 된다)을 구현한다. 
*/

type Book = {
    author: string;
    pages?: number; // 선택적 속성 
};
let book1: Book = {author: "구디"}; // pages는 필수 속성이 아니다.
// let book2: Book = {pages: 100}; // Error - 'author' 속성이 '{ pages: number; }' 형식에 없지만 'Book' 형식에서 필수입니다.


// 함수의 선택적 매객변수
function sendMessage(name: string) {
    console.log(`Hello, ${name}`); // 백틱문자열 안에 표현식 가능 
};

// sendMessage(); // Error - 1개의 인수가 필요한데 0개를 가져왔습니다.
// 자바스크립트는 name에 undefined값이 자동으로 할당되지만, 타입스크립트는 Error 

function sendMessage2(name?: string) { // name을 선택적 매개변수로 지정 
    console.log(`Hello, ${name}`);
};

sendMessage2(); // name에 undefined값이 할당됨

function sendMessage3(name: string, msg?: string) {
    console.log(`Hello, ${name}`);
    if(msg !== undefined) {
        console.log(msg);
    }
};

sendMessage3("나미");
sendMessage3("나미", "방가방가");

// 선택적 매개변수 뒤에 필수 매개 변수는 올 수 없다.
//function sendMessage4(name?: string, msg: string) {} // Error - 필수 매개 변수는 선택적 매개 변수 뒤에 올 수 없습니다.


/*
    9. 교차타입(Intersection Type)
    
    - 타입 교집합(Intersection, &) 연산자
      인터섹션 타입 연산자는 & 기호로 표시된다. 이 연산자는 두 개 이상의 타입을 조합하여 하나의 타입으로 정의할 때 사용된다.
      객체 A와 객체 B의 속성을 모두 가지는 객체를 정의하려면 다음과 같이 작성할 수 있다.
      type AB = A & B;
*/

type Robot = {
    name: string;
    power: boolean;
};
type Bird = {
    name: string;
    age: number;
};

type RobotBird = Robot & Bird;

let rb: RobotBird = {
    name : "로봇참새",
    power: true, 
    age: 1,
};
console.log(rb);

