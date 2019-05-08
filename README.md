# Learning JavaScript
Leaning JavaScript with internet!
* [codeit](https://www.codeit.kr/)
* [Nomad Coders](https://academy.nomadcoders.co/)

## codeit : JavaScript로 배우는 '인터렉티브 웹'

### 브라우저에서 코딩할 수 있는 서비스
* [repl.it](https://repl.it/)
* [Codenvy](https://codenvy.com/)
* [Cloud9](https://aws.amazon.com/ko/cloud9/?origin=c9io)

### 개요

**JavaScript는 "웹 프론트엔드"를 위해 만들어진 언어**

1. 웹(Web) : 인터넷 환경
2. 프론트엔드(Front end)
3. HTML, CSS, JS의 구분된 역할
* HTML : 웹사이트의 구조
* CSS : 웹사이트 디자인
* JS : 웹에서의 인터랙선(Interaction)

## 1. 데이터를 다루는 법

### 변수와 상수
1. **변수(Variable)**

* 변수의 정의
  ```javascript
  // 1. 변수 바로 정의 
      var score = 0;
  // 2. 변수만 정의 하고 추후게 값 지정
      var score;
      score = 0;
  // 3. 여러 변수를 한번에 정의
      var score = 1, score2 = 0;
  ```

* 변수명 정의 원칙
  + 필수적인 룰
    - JavaScript 식별자는 문자(대/소문자), 밑줄, 달러기호($)로 시작해야 하며, 숫자는 두 번째 글자부터 가능
    - 대문자와 소문자를 구분함
    - 예약어(JavaScript가 짐해놓은 단어)는 사용하면 안됨
  + 코드 스타일링에 대한 약속
    - 의미 있는 이름으로 정의
    - 추상적이지 않은 이름으로 정의
    - camelCase로 변수 이름 정의
  ```javascript
  var bad_variable_name //비추천
  var goodVariableName //추천
  ```
  + 참고 사이트
    - https://www.w3schools.com/js/js_conventions.asp
    - https://github.com/tipjs/javascript-style-guide

2. **상수(Constant)**
* 상수의 정의
  ```javascript
  // 상수는 한번 정의하면 바꿀 수 없음
  const MAX_LEVEL = 99;
  // 상수명은 모두 대문자로 작성하는 것을 원칙으로 함
  ```

### 데이터의 형태 : 자료형

1. 숫자형(number)
2. 문자열(string)
3. 논리형(boolean)
```javascript
var n = 10;
var s = '10';
var b = true;
// 자료형 확인
typeof n; //"number"
typeof s; //"string"
typeof b; //"boolean"
```

#### 숫자형(number) 

* 사칙연산
  ```javascript
  3 + 7 //합
  3 - 7 //빼기
  3 * 5 //곱
  8 / 2 //나누기
  7 % 3 //나머지
  ``` 
* 자료형 
  + 다른 언어와 달리 소수와 정수를 구분하지 않음
  + 결과가 정수로 나올 수 있으면 정수로 표기
  ```javascript
  typeof 4; // "number"
  typeof 3.5; // "number"
  3.5 + 1.5 // 5
  ``` 

* Syntactic Sugar
  + Assignment Operator
    - python과 동일하게 사용가능
  + 증가(increment), 감소(decrement)
    - 변수의 값을 1씩 증가시키거나 감소시킬 때에는 더 간단하게 표현 가능
  ```javascript
  // 각 세줄은 동일한 의미임
  x = x + 1;
  x += 1;
  x ++;

  y = y - 1;
  y -= 1;
  y --;
  ```

#### 문자열(string)
* 문자열 정의
  ```javascript
  var text1 = '안녕하세요';
  var text2 = "안녕하세요";
  // ' 또는 "로 문자열 정의
  var text3 = 'it's cool'; //오류발생
  var text3 = "it's cool";
  ```

* 문자열 연산
  ```javascript
  'hello' + 'world' // "helloworld"
  'hello' + ' world' // "hello world"
  "2" + "3" // "25"
  ```

#### 논리형(boolean)
* 논리형 표현
  ```javascript
  true //true
  false //true
  typeof true // boolean

  3 > 7 // false
  typeof (3 > 7) // boolean

  3 >= 3 // true

  3 == '3' // ture : ==는 데이터 타입이 달라도 값이 같으면 true 
  3 === '3' // false : ===는 데이터 타입과 값 모두가 같아야 true
  ```

* 논리형 연산
  ```javascript
  // and 연산
  true && true // true
  // or 연산
  true || false // true
  // not 연산
  !false // true

  //example
  (7 > 3) && (6 < -1); // true && false -> false
  (7 > 3) || (6 < -1); // true
  !(7 > 3) // !true -> false
  ```

#### 형변환
`Number`와 `String`을 사용해서 숫자형, 문자열을 형변환 할 수 있음
```javascript
var scoreString = '10';
typeof scoreString; // "string"

Number(scoreString);
type of Number(scoreString); // "number"

type of String(20); // "string"
```

* 사용예시
  + 형변환 사용 예시
  ```javascript
  var favoriteNumber = window.prompt("가장 좋아하는 숫자를 적어주세요");
  // 실행하면 사용자의 입력값을 받을 수 있는 창이 뜸
  favoriteNumber // "7" (예시)
  typeof favoriteNumber; // "string"
  //window.prompt 함수는 입력받은 값을 string으로 받음

  var favoriteNumber = Number(window.prompt("가장 좋아하는 숫자를 적어주세요"));
  favoriteNumber // 7
  typeof(favoriteNumber); // number
  ```
  + 형변환 불가 예시
  ```javascript
  Number("hello"); // NaN
  // NaN : Not a Number
  ```

### 배열(array)
여러개의 값을 하나의 변수에 지정할 때 사용할 수 있음
```javascript
var brands = ['Apple', 'Coca-Cola', 'Starbucks'];
var iPad = [800, 'Black', true]
// JS의 배열에서는 number, string, boolean 등 서로 다른 자료형을 하나의 배열에 저장할 수 있음
```

배열의 자료형(typeof)는 `array`가 아닌 `object`로 나옴
```javascript
typeof brands; // "objact"
typeof iPad; // "object"
// object는 JS에서 중요한 개념
```
배열의 index는 0부터 시작함
```javascript
brands[0] // "Apple"
iPad[2] // true
```
#### 문자열과 배열
문자엷과 배열은 비슷한 속성을 가지고 있음
* 비슷한 점
  + index 사용
  ```javascript
  var text1 = "hello"
  var text2 = ['h', 'e', 'l', 'l', 'o']
  text1[1] // "e"
  text2[1] // "e"
  ```
  + length 사용
  ```javascript
  text1.length // 5
  text2.length // 5
  ```
* 다른 점
  + 자료형(typeof)
  ```javascript
  typeof text1 // "string'
  typeof text2 // "object"
  text1 == text2 // false
  ```
  + mutable / immutable
    - 배열은 mutable하지만 문자열은 immutable함
  ```javascript
  text1[0] = 'b';
  text2[0] = 'b';
  text1 // ['b', 'e', 'l', 'l', 'o']
  text2 // "hello"
  ```

#### 2차 배열
```javascript
var brands = ['Apple', 'Coca-Cola', 'Starbucks'];
var products = [
    ['iPhone', 'iMac', 'Macbook'], 
    ['Coke', 'Diet Coke'], 
    ['Americano', 'Latte', 'Tea']
];
```
`brands`와 `products`를 console로 확인(`console.log()`)하면 다음과 같이 나옴
```
(3) ["Apple", "Coca-Cola", "Starbucks"]
(3) [Array(3), Array(2), Array(3)]
```
2차 배열 내의 항목을 받아오기 위해서는 index를 중첩되게 사용하면 되며, 이를 변수에 저장할 수 있음
```javascript
products[1][2] // "Macbook"
var appleProducts = products[0];
appleProducts[1] // "iMac"
```

### 객체
`Property: Value`로 구성됨
```javascript
var person = {
    name: "Dongwook",
    age: 30,
    nationality: "Korea"
};

console.log(person); //object
console.log(person["name"]); // Dongwook
console.log(person.name); // Dongwook 
```

## 2. 코드의 흐름
### 함수
### 조건문
### 반복문