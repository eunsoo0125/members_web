const ver = navigator.userAgent;
console.log(ver);

const isIE = /edg/i.test(ver);
// i = 대소문자 구분이 없다는 뜻
// trident 대신에 chrome이 들어가면 그 문장안에 chrome이 있는지  확인
console.log(isIE);

if(isIE) {
  alert('익스플로러 브라우저로 접속하셨습니다. 이 웹 페이지는 익스플로러를 지원하지 않습니다. 다른 브라우저로 접속해 주세요!!');
}