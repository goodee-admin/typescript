/*
    1. 타입스크립트의 타입시스템 

    - 타입스크립트는 데이터타입(자바스크립트에서 다루는 값의 타입)이 존재한다.
      자바스크립에서 typeof 연산자가 설명하는 것을 의미한다.
    - 타입스트립트의 기본 타입은 자바스크립트의 기본 원시 타입을 포함한다.
      string, number, boolean, undefined, null, symbol
    - 타입스크립트의 타입시스템은 변수의 선언시 타입을 확인 or 유추한다.
*/

let age: number = 25; // 숫자 타입
// age.lenght; // 오류발생 - 'number' 형식에 'lenght' 속성이 없습니다.

let username: string = "John"; // 문자열 타입
let isActive: boolean = true; // 불리언 타입


/*
    2. 타입스크립트의 할당가능성 체크 
    - 타입스크립트는 변수의 초깃값을 읽고 해당 변수가 허용되는 타입을 결정한다. 
    - 해당 변수에 새로운 값이 할당되면, 값의 타입이 변수의 타입과 동일한지 확인 후 할당한다.
      다른 타입의 값이 할당되면 타입 오류가 발생한다.  
*/

let job = "student";
// 변수에 마우스를 올리면 string 타입이라고 유추
// job = 7; // 오류발생 - 'number' 형식은 'string' 형식에 할당할 수 없습니다.

let strOrNum = Math.random() > 0.5 ? "" : 10;
// 변수에 마우스를 올리면 string | number 타입이라고 유추

// strOrNum 변수는 stirng or number 값이 할당 가능하다.
strOrNum = "hello";
strOrNum = 10;
// strOrNum = true; // 오류발생 - 'boolean' 형식은 'string | number' 형식에 할당할 수 없습니다.


/*
    3. 타입 애너테이션 - 초깃값을 할당하지 않고도 변수 타입을 선언할 수 있다.
    - 변수선언시 타입이 선언되어 있지 않거나(let x:number) 초깃값이 없다면(let x = 0) 
      기본적으로 변수를 암묵적인 any 타입으로 간주합니다
*/

let x; // let x: any;
// x변수의 마우스를 올리면 'x' 변수는 암시적으로 'any' 형식 
x = "bye";
x = 100;
console.log(x.length); // number값이 할당되었음에도 string.length속성이 사용됨 -> 실행시 에러 발생 

// any 타입 vs unknown 타입
let y: unknown;
y = "good";
y = 200;
// console.log(y.length); // unknown타입의 경우 타입체크 오류 발생 -> 타입체크 후 사용 
if(typeof y === "string") {
    console.log(y.length);
}

/*
    - any
      모든 타입을 허용한다.
      TypeScript에서 타입 검사를 느슨하게 하므로 코드에는 문제가 없으나 실행(Runtime) 시 예기치 못한 문제가 발생할 가능성이 있다.

    - unknown
      모든 타입을 허용한다.
      any 타입과는 다르게 프로퍼티 또는 연산을 하는 경우 컴파일러가 체크합니다. 
*/
