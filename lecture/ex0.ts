/*
    0. 타입스크립트 실행 환경 설정

    - typescript 글로벌(g) 설치 
      npm install -g typescript 
    - tsc -v
    - ts-node 글로벌(g) 설치
      타입스크립트파일은(ts) 자바스크립트파일(js)로 변경 후 js파일을 실행하여야 한다.
      ts-node는 .ts 파일을 .js로 바꿔서 실행할 필요 없이 결과 확인이 가능한 툴이다.
      npm install -g ts-node

    - 터머널 프로젝트 루트폴더위치에서 tsc --init 실행하여 tsconfig.json 파일 생성 
      tsc --init
*/

console.log("test");
// 실행 - ts-node ./lecture/ex00.ts
