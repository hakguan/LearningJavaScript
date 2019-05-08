/* ---------------------------------------- */
console.log(7. 숫자형 연습)

var width = 10;
var height = 20;

// 둘레의 길이 구하기
var perimeter;
perimeter = 2 * (width + height);

// 넓이 구하기
var area;
area = width * height;

// 테스트 코드
console.log("둘레의 길이: " + perimeter);
console.log("넓이: " + area);

/* ---------------------------------------- */
console.log(8. 자료형 활용하기1)

// 숫자형과 문자열 재료
var material1 = 3;
var material2 = '3';
var material3 = 10;
var material4 = '4';
var material5 = 4;

// 연산 결과
var result1;
var result2;

// 연산을 통해 result1에 문자열 '34'를, result2에 숫자형 34를 만들어 넣어주세요.
// 코드를 작성하세요.
result1 = material2 + material4;
result2 = material1 * material3 + material5;


// 테스트 코드
console.log(result1);
console.log(typeof result1);
console.log(result2);
console.log(typeof result2);


/* ---------------------------------------- */
console.log("13. 자료형 활용하기2")

// 숫자형과 문자열 재료
var material1 = '3';
var material2 = 3;
var material3 = '4';
var material4 = 10;

// 요리 결과
var result1;
var result2;

// 형 변환을 사용해서 result1에는 문자열 '30'을, result2에는 숫자형 40을 만들어 넣어보세요.
// 코드를 작성하세요.
result1 = String(material2 * material4);
result2 = Number(material3) * material4;

// 테스트 코드
console.log(result1);
console.log(typeof result1);
console.log(result2);
console.log(typeof result2);

/* ---------------------------------------- */
console.log("13. 자료형 활용하기2")