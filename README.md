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
  // 2. 변수만 정의 하고 추후에 값 지정
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
  var text3 = 'it's cool'; //오류 발생
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

## 2. 코드의 흐름 - 함수
### 함수
함수를 사용할 경우, 유지보수가 쉽고, 더 효율적으로 코드가 작동할 수 있음
* 함수의 정의
  ```javascript
  // function 함수명(parameter) {함수내용}

  function logTask(task) {
    console.log(task + ": 완료");
    console.log("-");
  }

  logTask("보고서 작성");
  ```

* return
  ```javascript
  function inchToCentimeter(inch) {
    var centimeter = inch * 2.54;
    return centimeter;
  }
  // 위 함수는 inch를 cm로 계산하여 centimeter값을 return해주는 함수임
  ```

* JS 내장 함수
  + 형 변환 함수 : `String()`, `Number()` 등
  + parselnt 함수 : 숫자와 문자가 섞여있는 경우 숫자만 꺼내서 형변환 시켜줌
  ```javascript
  parseInt('100건'); // 100
  // 숫자가 앞에 있는 경우만 적용 가능
  parseInt('범죄건수100'); // NaN
  ```
  + 그 외 내장 함수 

  |       함수       | 내용                                     |
  | :------------: | :------------------------------------- |
  |   `String()`   | 숫자를 문자열로 변환해주는 함수                      |
  |   `Number()`   | 문자열을 숫자로 변환해주는 함수                      |
  |  `parseInt()`  | 문자열 안에서 정수를 뽑아주는 함수                    |
  | `parseFloat()` | 문자열 안에서 숫자(소수 포함)를 뽑아주는 함수             |
  |   `alert()`    | 사용자에게 메시지를 띄워주는 함수                     |
  |   `prompt()`   | 사용자에게 메시지를 띄우고, 문자열을 입력받는 함수           |
  |  `confirm()`   | 사용자에게 메시지를 띄우고, 확인과 취소 중 하나를 누르게 하는 함수 |

### 조건문
* if문
  ```Javascript
  var inputNumber = window.prompt("한 자리 숫자를 적어주세요.");
  // window.prompt를 통해 사용자가 값을 입력할 수 있는 창이 뜨고, 
  // 입력된 값의 자료형은 string임
  
  if (inputNumber === '7') {
  // if의 ()안의 내용이 true일 경우 
    alert('Lucky!');
  } else {
  // if의 ()안의 내용이 False일 경우
    alert('Unlucky!');
  }
  ```
  + else if를 활용할 경우 더 많은 조건을 지정해줄 수 있음
  ```Javascript
  if (inputNumber === '7') {
    alert('Lucky!');
  } else if (inputNumber === '0') {
    alert('Zero');
  } else if (inputNumber === '1') {
    alert('One');
  } else {
    alert('Unlucky!');
  }
  ```
  + 보다 복잡한 조건문
  ```Javascript
  var num = 12;
  if (num % 2 === 0 && num % 3 === 0) {
    console.log(num + '는 6의 배수입니다.');
  } else {
    console.log(num + '는 6의 배수가 아닙니다.');
  }
  // console에 '12는 6의 배수입니다.'가 출력됨
  ```
* switch문
  + if문과 비슷하나 원하는 동작 후에 break를 사용해줘야 함
  ```Javascript
  switch (inputNumber) {
    case '0':
      alert('Zero!');
      break;
    case '1':
      alert('One!');
      break;
    case '7':
      alert('Lucky!');
      break;
    default:
      alert('Unlucky!');
      break;
    // defalut에는 위의 조건들을 모두 만족시키지 못할 경우 진입함
    // break를 사용하지 않을 경우 조건에 맞는 경우부터 마지막까지 모둔 alert가 출력됨
    // 1을 입력할 경우 'One!'부터 'Unlucky!'까지 모두 출력되며, 중간에 break를 사용할 경우 사용한 단계까지만 출력됨
  }
  ```
  + 경우에 따라 switch문과 if문 각각이 유리한 경우가 존재함
    - **if문**을 사용하는 것이 유리한 경우: 대소범위, 조건이 복잡한 경우 등
    ```Javascript
    var score = 85;
    if (score > 70) {
      alert("잘 하셨습니다!")
    }
    ```

    - **switch문**을 사용하는 것이 유리한 경우: case별로 구분하는 것이 더 편리한 경우 
    ```Javascript
    /* 
    A 코스: 짜장면 짬뽕 탕수육 양장피 팔보채
    B 코스: 유산슬 짜장면 짬뽕 탕수육 양장피 팔보채
    C 코스: 게살스프 칠리새우 유산슬 짜장면 짬봉 탕수육 양장피 팔보채
    */
    var courseName = window.prompt("코스명을 적어주세요(A, B, C 택1)");

    switch (courseName) {
      case 'C':
        console.log('게살스프 칠리새우');
      case 'B':
        console.log('유산슬');
      case 'A':
        console.log('짜장면 짬봉 탕수육 양장피 팔보채');
        break;
      default:
        console.log('주문이 잘못되었습니다.');
        break;
    }
    ```

## 3. 코드의 흐름 - 반복문
### 반복문
* for 반복문
  ```Javascript
  var brands = ['Apple', 'Coca-Cola', 'Starbucks', 'Amazon', 'Disney', 'BMW'];
  /*
  for (반복문에 사용할 변수 선언; 반복 조건; 반복문이 끝나고 실행될 코드) {
    반복시키고 싶은 코드;
  }
  */
  for (var i = 0; i < 6; i = i + 1) {
    console.log(brands[i]);
  }
  ```