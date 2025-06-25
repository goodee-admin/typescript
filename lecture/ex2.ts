/*
    4. 유니언(union) vs 내로잉(narrowing)
      유니언 : 값에 허용된 타입을 두가지 이상 가능한 타입으로 확장시키기
      내로잉 : 값에 허용된 타입이 하나 이상의 가능한 타입이 되지 않도록 좁히는 것
*/

/*
    - 유니언 타입(union type) 
      유니언 타입 선언은 타입 애너테이션으로 타입을 정의하는(초기값을 할당하지 않는) 모든 곳에서 사용 가능하며 타입 선언 순서는 중요하지 않다.
*/

let val: undefined | number;
// let val: number | undefined; // 유니언 타입의 순서가 바뀌어도 동일하다.

// 속성(메서드) 접근 - 공통적으로 가지고 있는 속성(메서드)만 사용가능하다.
let strOrNum2: string | number = Math.random() > 0.5 ? "hello" : 777;
strOrNum2.toString(); // number | string 타입으로 두 개의 타입에 모두 존재하는 toString()은 사용할 수 있다.
// strOrNum2.toUpperCase(); // Error - 'number' 형식에 'toUpperCase' 속성이 없습니다
// strOrNum.toValue(); // Error - 'string' 형식에 'toValue' 속성이 없습니다.

// 타입체크 분기코드 
if(typeof strOrNum2 === "string") {
    strOrNum2.toUpperCase();
} else {
    strOrNum2.valueOf();
}


/* 
    - 내로잉(narrowing)
      변수에 값을 직접 할당하여 타입을 좁혀준다.
*/
let strOrNum3: string | number;
strOrNum3 = "hello"; // string타입으로 내로잉
console.log(strOrNum3); // 변수에 마우스 올려보면 - let strOrNum3: string 
strOrNum3.toLocaleLowerCase();
strOrNum3 = 7; // number타입으로 내로잉 
console.log(strOrNum3);


/*
    5. 리터럴 타입
*/
const greet = "hello"; // 타입스크랩트에서는 const(상수)를 사용하여 값을 할당하면 리터럴 값자체가 타입이 된다.
// greet에 마우스를 올려보면(const greet: "hello") greet은 "hello"타입이다.

// 유니언 타입 애너테이션에서도 리터럴 타입이 사용 가능하다.
let numHelloBye: number | "hello" | "bye";

numHelloBye = 5;
numHelloBye = "hello";
numHelloBye = "bye";
// numHelloBye = "hi"; // Error - '"hi"' 형식은 'number | "hello" | "bye"' 형식에 할당할 수 없습니다.
// numHelloBye = undefined; // Error - 'undefined' 형식은 'number | "hello" | "bye"' 형식에 할당할 수 없습니다.
