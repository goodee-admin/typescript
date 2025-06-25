/*
    10. 함수
*/

/* function sing(song) { // Error - 'song'이(가) 선언은 되었지만 해당 값이 읽히지는 않았습니다.
    console.log("test");
} */

function sing(song: any) { 
    console.log(song);
};
sing(null);
// sing(); // Error - 1개의 인수가 필요한데 0개를 가져왔습니다.
// sing(null, null); // Error - 1개의 인수가 필요한데 2개를 가져왔습니다.

function sing2(song: string, singer: string) {
    console.log(`${singer}님의 ${song}`);
};
sing2("너의 의미", "아이유");

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
