# Learning JavaScript
Leaning JavaScript with internet!
* [codeit](https://www.codeit.kr/)
* [Nomad Coders](https://academy.nomadcoders.co/)

## codeit : JavaScript로 배우는 '인터렉티브 웹'

### 도움이 되는 웹 사이트
1. 브라우저에서 코딩할 수 있는 서비스
   + [repl.it](https://repl.it/)
   + [Codenvy](https://codenvy.com/)
   + [Cloud9](https://aws.amazon.com/ko/cloud9/?origin=c9io)

2. 기타(Q&A, test 등)
   + [Google](https://www.google.com)
   + [Stack Overflow](https://stackoverflow.com/)
   + [JSFiddle](https://jsfiddle.net/)
   + [W3Schools](https://www.w3schools.com/)
   + [MDN JavaScript Document](https://developer.mozilla.org/bm/docs/Web/JavaScript) : Mozilla Developer Network(MDN)에서 제공하는 JavaScript 문서(튜토리얼, 스타일 가이드, 각 기능에 대한 설명 등)
   
3. Style Guide
   + [에어비엔비 JavaScript 스타일 가이드](https://github.com/tipjs/javascript-style-guide)
   + [깃허브에 공유되어 있는 인기 있는 JavaScript 스타일 가이드](https://github.com/rwaldron/idiomatic.js/tree/master/translations/ko_KR)
   + [구글 JavaScript 스타일 가이드](https://google.github.io/styleguide/jsguide.html)

### 개요

**JavaScript는 "웹 프론트엔드"를 위해 만들어진 언어**

1. 웹(Web) : 인터넷 환경
2. 프론트엔드(Front end)
3. HTML, CSS, JS의 구분된 역할
* HTML : 웹사이트의 구조
* CSS : 웹사이트 디자인
* JS : 웹에서의 인터랙선(Interaction)

## 연습파일
### [기초 연습파일(basic_exercise)](https://github.com/hakguan/LearningJavaScript/tree/master/basic_exercise)
1. 데이터를 다루는 법
2. 코드의 흐름 - 함수
3. 코드의 흐름 - 반복문

# Table of Contents

- [1. 데이터를 다루는 법](#1-데이터를-다루는-법) 
    - [변수와 상수](#변수와-상수)  
    - [데이터의 형태 : 자료형](#데이터의-형태--자료형) 
    - [배열(array)](#배열array) 
    - [객체](#객체) 
- [2. 코드의 흐름 - 함수](#2-코드의-흐름---함수) 
    - [함수](#함수) 
    - [조건문](#조건문) 
- [3. 코드의 흐름 - 반복문](#3-코드의-흐름---반복문) 
    - [반복문](#반복문) 
- [4. HTML, CSS와의 콜라보레이션](#4-html-css와의-콜라보레이션) 
    - [jQuery](#jquery) 
    - [Event](#event) 
- [5. JavaScript의 패키지](#5-JavaScript의-패키지)
    - [Math](#math)
    - [String](#string)
    - [Array](#array)
    - [Date](#date)
- [6. Audio](#6-audio)
- [7. DOM tree](#7-dom-tree)
    - [선택과 동작](#선택과-동작)
    - [요소의 추가](#요소의-추가)
    - [요소의 이동과 삭제](#요소의-이동과-삭제)
- [8. Event Object](#8-event-object)
  - [Event Object 들여다보기](#event-object-들여다보기)        
  - [Event Handler](#event-handler)        
  - [다양한 event](#다양한-event)
  - [\$(document).ready와 익명함 수](#$(document).ready와-익명함수)

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

* Boolean의 활용
  + 용어 설명  
    - null / undefined
    ```Javascript
    var n = null;
    var u;

    console.log(n); // null : 비어있는 값
    console.log(u); // undefined : 변수에 아무 것도 할당되지 않았을 때의 값
                    // 변수가 선언만 된 경우 undefined라는 값을 갖게됨
    ```
    - NaN (Not a Number)
    ```Javascript
    var n = parseInt('abcd')

    console.log(n); // NaN : 숫자가 아닌 것을 숫자로 표현하려 할 때 반환되는 값 
    ```
  + `false`와 `true`로 간주되는 것들
    - 숫자 : `0`은 `false`, `다른 숫자`는 `true`
    - 문자열 : `빈 문자열`은 '`false`, `비어있지 않은 문자열`은 `true`
    - null, undefined, NaN : `null`, `undefined`, `NaN`은 `false`
  + 활용
    ```Javascript
    // 변수 str이 빈 문자열인지 확인하는 방법
    if (str) {
      console.log("str은 빈 문자열이 아닙니다.");
    } else {
      console.log("str은 빈 문자열입니다.");
    }

    // 다른 자료형(숫자, 문자열)을 Boolean으로 변형
    var str = '';
    console.log(!str);    // true
    console.log(!!str);   // false

    var num = 0;
    console.log(!0);      // true
    console.log(!!0);     // false
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
문자열과 배열은 비슷한 속성을 가지고 있음
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

### for 반복문

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

**for of 반복문**

```Javascript
var brands = ['NIKE', 'ADIDAS', 'REEBOK'];

// 배열의 모든 값을 출력하기 위한 반복문
for (var i = 0; i < brands.length; i ++) {
  console.log(brands[i]);
}

// for of 반복문은 배열의 0번 index를 첫 번째 값으로 가짐
for (value of brands) {
  console.log(value);
}
```

* 일반 for 반복문과 for of 반복문이 갖는 장점
  + 조건 작성 부분 간편
  + 불필요한 변수 지정 불필요

**for in 반복문**

- for of 반복문은 ES6(2015년)에 생긴 기능으로 그 전에는 for in 반복문을 사용하였음
- 만약 테스트 했을 때 for of 반복문이 작동하지 않는다면 해당 브라우저가 ES6을 지원하는지 여부를 알아봐야 함
- for in 반복문은 for of 반복문과 달리 value가 아닌 index로 접근함

```Javascript
var arr = ['apple', 'banana', 'coconut'];

//for of 반복문
for (var v of arr) {
  console.log(v); // apple 부터 값 출력
}

//for in 반복문
for (var k in arr) {
  console.log(k); // 0, 1, 2 순서로 값 출력
}
// 따라서 value를 출력하고 싶을 경우 console.log(arr[k])를 사용해야 함
```

### while 반복문

```Javascript
var brands = ['Apple', 'Coca-Cola', 'Starbucks', 'Amazon', 'Disney', 'BMW'];
// 1. 변수지정
var i = 0;
// 2. while문 작성
while (i < 6) { //조건이 true일 경우 반복
  console.log(brands[i]);
  i ++;
}
// while문의 조건이 false가 될 경우 반복 종료
```

* break문 : while문의 조건부분과 상관 없이 반복문에서 나오게 하고 싶은 경우
  ```Javascript
  var i = 100;

  while (true) {
    // i가 23의 배수일 경우 반복문 종료
    if (i % 23 == 0) {
      break;
    }
    i = i + 1;
  }

  console.log(i);
  ```
* continue문 : 현재 진행되고 있는 수행부분을 중단시키고 다시 조건부분을 확인하도록 하고 싶은 경우
  ```Javascript
  var i = 0;

  while (i < 15) {
    i ++;

    // i가 홀수일 경우 console.log(i)로 넘어가지 않고 다시 조건부분으로 넘어감
    if (i % 2 == 1) {
      continue;
    }

    console.log(i);
  }
  ```

* for문 vs while문
  + for문과 while문의 기능적 차이는 없으나, 경우에 따라 더 적합하고 보기 좋은가에 대한 판단을 통해 어떤 문법을 사용할지 결정함
  + 일반적으로 반복 횟수가 예측 가능할 경우 for문을 사용하는 것이 더 효과적이고, 
  + 반대로 반복 횟수를 예측할 수 없을 경우 while문을 쓰는 것이 효과적인 경우가 많음

### each 반복문

반복문이라기 보다는 메소드로 사용되는 것(?)
```Javascript
$('.card').each(function() {
  console.log($(this).text());
})
// card 클래스를 가진 항목이 차례대로 불려오고 함수가 실행됨
// $(this)를 출력할 경우 각 항목에 대한 객체가 리턴되며, 
// .text() 할 경우 각 객체의 text를 불러올 수 있음
```



## 4. HTML, CSS와의 콜라보레이션
[learning_webdev/practice/travel_site/](https://github.com/hakguan/learning_webdev/tree/master/practice/travel_site)에서는 각 국가의 페이지로 이동할 때 국가별로 html 파일을 만들어서 지정했지만, [Javascript를 사용](https://github.com/hakguan/LearningJavaScript/tree/master/practice/travel_site)하면 하나의 html 파일에서 클릭했을 때의 명령을 각각 지정해줄 수 있고 html의 body 부분을 최대한 보기 좋게 하기 위해 함수를 정의해 활용하는 것이 좋음

```Html
<body>
  <div id="menu">
    <a id="home" onclick="clickHome();">Home</a>
    <a id="seoul" onclick="clickSeoul();">Seoul</a>
    <a id="tokyo" onclick="clickTokyo();">Tokyo</a>
    <a id="paris" onclick="clickParis();">Paris</a>
  </div>
</body>

<img id="photo" src="images/home.png" width="90%">

<script>
  // 이미지, 폰트를 바꿔주는 함수
  function clickHome() {
    document.getElementById('photo').src = 'images/home.png';
    document.getElementById('home').style.fontWeight = 'bold';
    document.getElementById('seoul').style.fontWeight = 'normal';
    document.getElementById('tokyo').style.fontWeight = 'normal';
    document.getElementById('paris').style.fontWeight = 'normal';  
  }
  // 생략 
</script>
```

### jQuery
#### 설치방법

1. **링크를 html 파일에 삽입하기**  
  [jQuery CDN](https://code.jquery.com/)에서 minified 항목의 내용을 html 문서 `<script>`태그 위에 붙여넣기  

    ```html
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
    crossorigin="anonymous"></script>
    
    <script>
      // 자바스크립트 코드
    </script>
    ```  
  
2. **jQeury 코드 파일을 프로젝트 폴더에 설치하기**  
  [jQuery 홈페이지](https://jquery.com/)에서 jQuery 코드를 다운받고 프로젝트 폴더 내에 추가한 후 `<script>`태그에 `jquery.js`의 경로를 추가  
      
    ```html
    <script src="jsquery.js의 경로"></script>
    <script>
      // 자바스크립트 코드
    </script>
    ```
#### 기본문법
[travel_site](https://github.com/hakguan/LearningJavaScript/tree/master/practice/travel_site) javascript 코드 단순화
  ```html
  <script>
    function clickHome() {
      $('#photo').attr('src', 'images/home.png');
      // $('선택자).attr('변경할 속성', '지정할 내용')
      $('#home').css('font-weight', 'bold');
      // $('선택자).css('css 속성', '지정할 내용')
    }
  </script>
  ```
  
### Event
HTML, Javascript에서 event란 HTML 요소들에게 일어날 수 있는 일들을 의미함  
- 사용자가 요소를 **클릭한다**
- 마우스가 요소 **위로 올라온다**
- 마우수가 요소 **밖으로 나간다**
- 페이지 **로딩이 끝난다**

#### Event Handling
Event가 발생할 경우 어떠한 동작이 일어나도록 프로그래밍 하는 것을 이벤트 핸들링(Event Handling)이라고 함
|        Event         |       Event Handling       |
| :------------------: | :------------------------: |
| `<a>` 태그를 **클릭**할 경우 | **이미지가 바뀌고 폰트가 굵어**지도록 한다. |

* [travel_site](https://github.com/hakguan/LearningJavaScript/tree/master/practice/travel_site)에서 image에 마우스가 위치할 경우/벗어날 경우 각각 그림자가 생기고/없어지도록 이벤트 핸들링  
  
  ```Html
  <body>
      <img id="photo" src="images/home.png" width="90%" 
      onmouseenter='mouseEnterPhoto();' 
      onmouseleave='mouseLeavePhoto();'>
  </body>

  <script>
    function mouseEnterPhoto() {
      $('#photo').css('box-shadow', '5px 10px');
    }
    function mouseLeavePhoto() {
      $('#photo').css('box-shadow', 'none');
    } 
  </script>
  ```
  
* HTML 문서를 단순하게 하고, `<scipt>` 태그 내에 javascript 코드를 작성
  + 예시1
  
    ```html
    <!-- before -->
    <a id="home" onclick="clickHome();">Home</a>

    <!-- after -->
    <a id="home">Home</a>

    <script>
      $('#home').on('click', clickHome); 
      // $('선택자').메소드('파라미터', 함수명);
      // on method의 첫번째 파라미터로 문자열 'click'을, 두번째 파라미터로 함수명을 넘겨주면,
      // before 부분의 onclick="함수명();"과 동일해짐 
    </script>
    ```
      - 예시1 에서 `$('#home').on('click', clickHome);` 부분은 event를 등록하는 코드이며, event handling은 `clickHome` 함수를 뜻함
      - 예시1의 jQuery와 Vanilla JavaScript 비교
  
        ```javascript
        // jQuery
        $('#home').on('click', clickHome);

        // Vanilla JavaScript
        document.getElementById('home').addEventListener('click', clickHome);
        ```
  + 예시2
  
    ```html
    <!-- before -->
    <img id="photo" src="images/home.png" width="90%" onmouseenter='mouseEnterPhoto();' onmouseleave='mouseLeavePhoto();'>

    <!-- after -->
    <img id="photo" src="images/home.png" width="90%">

    <script>
      $('#photo').on('mouseenter', mouseEnterPhoto);
      $('#photo').on('mouseleave', mouseLeavePhoto);
      // 예시1과 동일한 방식으로 코드 작성
    </script>
    ```
      
* 키보드 event handling 
  + 1, 2, 3, 4를 키보드로 입력하는 event에 대한 event handling
    - 아래 코드를 추가할 경우 키보드에서 입력이 발생할 경우 clickHome 함수가 작동하게 되어서 다른 페이지에 있을 때 키보드에서 입력이 발생하면 Home 페이지로 이동함
      ```javascript
      $(document).on('keydown', processKeyEvent);
      
      function processKeyEvent() {
        clickHome();
      }
      ```
  + 특정 값이 입력될 떄의 event handling
    1. 객채(object 확인)  
      - 아래 코드를 시행하고 console을 확인하면 event와 관련된 객체의 property와 value를 확인할 수 있음
      - 그 중 key라는 property의 value를 확인하면 사용자가 입력한 값을 확인할 수 있으며, 이 property를 사용하여 특정 값이 입력되는 event에 대한 event handling을 할 수 있음
      ```javascript
      $(document).on('keydown', processKeyEvent);

      function processKeyEvent(event) {
        console.log(event);
      }
      ```
    2. 특정 값이 입력될 경우에 대한 event handling 함수 작성
      ```javascript
      $(document).on('keydown', processKeyEvent);

      function processKeyEvent(event) {
        if (event['key'] === '1') {
          clickHome();
        } else if (event['key'] === '2') {
          clickSeoul();
        } else if (event['key'] === '3') {
          clickTokyo();
        } else if (event['key'] === '4') {
          clickParis();
        } 
      }
      ```

## 5. JavaScript의 패키지
### Math
[Math 참고링크](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math)  

**절댓값 (Absolute Number)**
```Javascript
console.log(Math.abs(-10));
// 10
```

**최댓값 (Maximum)**
```Javascript
console.log(Math.max(2, -1, 4, 5, 0));
// 5
```

**최솟값 (Minimum)**
```Javascript
console.log(Math.min(2, -1, 4, 5, 0));
//-1
```

**거듭제곱 (Exponentiation)**
```Javascript
console.log(Math.pow(2, 3));
// 8
```

**제곱근 (Square Root)**
```Javascript
console.log(Math.sqrt(25));
// 5
```

**반올림 (Round)**
```Javascript
console.log(Math.round(2.3));
// 2
```

**버림과 올림 (Floor and Ceil)**
```Javascript
console.log(Math.floor(2.8));
// 2
console.log(Math.ceil(2.4));
// 3
```

**난수 (Random)**
```Javascript
console.log(Math.random());
// Math.random을 하면 0 이상 1 이하의 값이 랜덤으로 리턴됨
```
  
### String
[String 참고링크](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/prototype)  

**문자열의 길이**  
`str.length`
```Javascript
var str = 'String';
console.log(str.length);
// 6
```

**특정 인덱스의 문자 받아오기**  
`str.charAt(index)`
```Javascript
var str = 'String';
console.log(str.charAt(2));
// r
```
`str.charAt(index)`와 `str[index]`의 차이

**문자열 안에서 다른 문자열 검색**  
`str.indexOf(searchValue)`
1. 문자열(searchValue)이 포함되어 있을 경우 문자열이 시작되는 `index` 리턴
2. 문자열이 포함되어 있지 않을 경우 `-1` 리턴
3. 문자열이 여러번 포함되어 있을 경우 처음 발견된 `index`가 리턴  

```Javascript
var str = 'Hello World!';
console.log(str.indexOf('e'));   // 1
console.log(str.indexOf('k'));   // -1
console.log(str.indexOf('orl')); // 7
console.log(str.indexOf('o'));   // 4
```
문자열이 여러번 포함되어 있을 경우 마지막 `index` 찾기  
`str.lastIndexOf(searchValue)`
```Javascript
var str = 'Hello World!';
console.log(str.indexOf('o'))    // 4
console.log(str.lastIndexOf('o'))// 7
```
  
**대소문자 변환**  

대문자로 바꾸기  
`str.toUpperCase()`
```Javascript
var str = 'String';
console.log(str.toUpperCase());
// STRING
```
소문자로 바꾸기  
`str.toLowerCase()`  
```Javascript
var str = 'String';
console.log(str.toLowerCase());
// string
```

**문자열 자르기**  

시작 지점과 긑 지점으로 자르기  
`str.substring(indexStart, indexEnd)`  

```Javascript
var str = 'Hello World';
console.log(str.substring(2,5)); // llo
// index 2 부터 index 4 까지
console.log(str.substring(2));   // llo World!
```

시작 지점과 길이로 자르기  
`str.substr(start, length)`
```Javascript
var str = 'Hello World!';
console.log(str.substr(2, 5));
// llo W
```

**앞뒤 공백 없애기**  
`str.trim()`
```Javascript
var str = '      Hello    World!     ';
console.log(str.trim());
// Hello    World!
```

### Array
[Array 참고링크](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)  

**배열의 길이**  
`array.length`
```Javascript
var brands = ['Apple', 'Coca-Cola', 'Starbucks'];

console.log(brands.length);
// 3
```

**배열에서 특정 값 찾기**  
`array.indexOf(item)`  
1. `item`이 포함되어 있는 경우 `item`의 `index`가 리턴
2. 포함되어 있지 않은 경우 `-1`이 리턴
3. 여러번 포함되어 있는 경우 처음 발견된 `index`가 리턴
```Javascript
var brands = ['Apple', 'Coca-Cola', 'Starbucks'];

console.log(brands.indexOf('Starbucks')); // 2
console.log(brands.indexOf('Kakao'));     // -1
```

**배열에 값 추가**  
`array.push(item1)`
```Javascript
var brands = ['Apple', 'Coca-Cola', 'Starbucks'];

brands.push('Kakao');
console.log(brands);
// ['Apple', 'Coca-Cola', 'Starbucks', 'Kakao']
brands.push('Samsung', 'LG', 'Facebook');
console.log(brands);
// ['Apple', 'Coca-Cola', 'Starbucks', 'Kakao', 'Samsung', 'LG', 'Facebook']
```

**배열에서 값 빼기**  
`array.pop()`
```Javascript
var brands = ['Apple', 'Coca-Cola', 'Starbucks'];

var lastBrand = brands.pop();
console.log(lastBrand);
// Starbucks
console.log(brands);
// ['Apple, 'Coca-cola']
```

**배열을 문자열로 바꾸기**  
`brands.join()`
기본값으로 각 `item`은 `,`로 연결됨
```Javascript
var brands = ['Apple', 'Coca-Cola',  'Starbucks'];

console.log(brands.join());
// Apple,Coca-Cola,Starbucks
```
파라미터로 `,`를 대체할 문자열을 입력할 수 있음
```Javascript
var brands = ['Apple', 'Coca-Cola',  'Starbucks'];

console.log(brands.join('###'));
// Apple###Coca-Cola###Starbucks
```
   
### Date
[Date 참고링크](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/prototype)  

날짜와 관련된 프로그램을 만들고 싶을 때 `Date` 객체를 활용할 수 있음  

**객체 만들기**  

현재 날짜로 설정  
`new Date();`
```Javascript
// 파라미터가 없을 경우 
//현재 날짜로 설정되어 있는 Date 객체가 리턴됨
var date = new Date();
```
원하는 날자로 설정  
`new Date('date')`
```Javascript
// 파라미터를 사용해서 원하는 날자로 설정할 수 있음
// 날짜만 쓸 경우, 0시 0분 0초로 지정됨

//1988년 6월 11일 5시 25분 30초
var date1 = new Date('June 11, 1988 05:25:30');
var date2 = new Date('1988-06-11T05:25:30');

// 1999년 12월 15일 (날짜만)
var date3 = new Date('1999-12-15');
var date4 = new Date('12/15/1999');
var date5 = new Date('December 15 1999');
var date6 = new Date('Dec 15 1999');
```

**날짜 정보 받아오기**  

Date 객체의 메소드를 활용해서 날짜 정보를 받아올 수 있음
```Javascript
var date = new Date('June 11, 1988 05:25:30');

console.log(date.getFullYear());        // 1988
console.log(date.getMonth());           // 5
// getMonth() method는 0부터 시작해 5는 6월을 의미함
console.log(date.getDate());            // 11
console.log(date.getDay());             // 6
// getDay() method는 일요일부터 0에서 시작해 6을 토요일을 의미함
console.log(date.getHours());           // 5
console.log(date.getMinutes());         // 25
console.log(date.getSeconds());         // 30
console.log(date.getMilliseconds());    // 0
console.log(date.toString());           // Sat Jun 11 1988 05:25:30 GMT+1000 (KDT)
console.log(date.toLocaleString());     // 6/11/1988, 5:25:30 AM
console.log(date.toLocaleDateString()); // 6/11/198
console.log(date.toLocaleTimeString()); // 5:25:30 AM
```

`getTime()` method는 1970년 1월 1일 자정으로부터 몇 ms가 지났는지를 리턴함
```Javascript
var date = new Date('June 11, 1988 05:25:30');
console.log(date.getTime());
// 581973930000
```

리턴된 ms값을 사용해 초, 분, 시, 일 등의 단위로 변환할 수 있음
```Javascript
var date = new Date('September 24, 1989 09:45:30');
console.log(date.getTime() + 'ms');                   // 622601130000ms
console.log(date.getTime()/1000 + '초');              // 622601130초
console.log(date.getTime()/1000/60 + '분');           // 10376685.5분
console.log(date.getTime()/1000/60/60 + '시간');      // 172944.75833333333시간
```

## 6. Audio
Audio 객채를 사용하여 소리를 재생할 수 있고,   
소리의 상태는 크게 **'생성'**, **'재생'**, **'정지'** 의 3단계로 나눌 수 있음
```Javascript
var audioFile = new Audio('file location or url'); // 생성
audioFile.play();                                  // 재생
audioFile.pause();                                 // 정지

// audio의 시작점으로 돌아가고 싶을 경우
audioFile.currentTime = 0; // audio 파일 재생 위치 설정
```

**예시코드**  
```javascript
var audioFile = new Audio("https://d34x6xks9kc6p2.cloudfront.net/540997b0-a35f-4b69-86d6-b1c925c4a264/540997b0-a35f-4b69-86d6-b1c925c4a264.mp3");

function playMusic() {
    audioFile.play();
}

function stopMusic() {
    audioFile.pause();
    audioFile.currentTime = 0; 
    // '멈춤' 버튼을 누른 후에는 오디오의 시작 지점을 처음으로 다시 돌려주기.
}

// HTML 코드에서 play, stop 버튼을 클릭하는 event에 대한 event handling
$('#playBtn').on('click', playMusic);
$('#stopBtn').on('click', stopMusic);
```

## 7. DOM tree
DOM (Document Object Model) : 문서 객체 모델  
코드를 객체(Object)로 구성된 DOM을 구성하고, 이를 시각화해서 브라우저에 보여줌

**jQuery**  
JQuery 코드는 '선택'과 '동작'으로 나눌 수 있고, 선택자를 지정하는 부분에는 다양한 선택자(id, class, css selector 등)를 사용할 수 있음

### 선택과 동작

**[선택]** jQuery 선택 메소드  

1. `filter`   

   ```javascript
   // filter('선택자')를 통해 요소를 선택하는 조건을 추가로 설정할 수 있음
   $('button').filter('.color-3').text('SELECTED!');
   ```
  
2. `not`
   
   ```javascript
   // not('선택자')를 통해 선택된 요소 중에서 조건에 해당되는 것들을 제외함
   $('button').not('.color-3').text('SELECTED!');
   ```
3. `eq`

   ```javascript
   // eq(n)를 통해 선택된 요소들 중에서 n번째 요소 하나만 선택되게 함
   // 0부터 카운트 하므로 1일 경우 두 번째 요소를 의미함
   $('button').eq(1).text('SELECTED!');
   ``` 

4. `parent`

   ```javascript
   // parent()는 선택된 요소의 부모 요소에 해당 동작을 적용해줌
   $('#btn-1').parent().css('background-color', 'black');
   ``` 

5. `children`

   ```javascript
   // children()은 선택된 요소의 모든 직속 자식 요소에 해당 동작을 적용함
   // children('선택자')할 경우 filter의 역할도 수행할 수 있음
   $('#box-1').children().css('background-color', 'black');
   ``` 

6. `find`

   ```javascript
   // find('선택자')는 선택된 요소의 모든 자식 요소에 해당 동작을 적용함
   // children()은 직속 자식만을 대상으로 하지만 find는 자식의 자식 등 그 이하 모두를 대상으로 함
   $('#box-1').find('.color-2').css('background-color', 'black');
   ``` 

7. `siblings`

   ```javascript
   // siblings()는 선택된 요소의 이웃 요소(형제)에 해당 동작을 적용함
   // sibling('선택자')할 경우 이웃 요소들 중 조건에 맞는 요소를 선택해줌
   $('#btn-1').siblings().text('SELECTED!');
   ``` 

**[선택]** 사용할 수 있는 CSS 선택자  

1. 태그 이름
   
   ```css
   h1 {
     color: orange;
   }
   ```
2. 클래스 / 아이디
   
   ```css
   /* class */
   .important {
     color: orange;
   }

   /* id */
   #favorite {
     color: blue;
   }
   ```
3. 자식(children)
   
   ```css
   .div i {
     color: orange;
   }
   ```
4. 직속 자식)direct children)
   
   ```css
   .div > i {
     color: orange;
   }
   ```
5. 복수선택
   
   ```css
   .two, .four {
     color: orange;
   }
   ```
6. 여러 조건
   
   ```css
   .outside.one {
     color: blue;
   }
   ```
7. Pseudo-class (가상 클래스)  
   콜론(`:`)을 사용해서 가상 클래스를 사용할 수 있음
   * n번째 자식
   
   ```css
   /* .div1의 자식인 <p> 태그 중 3번째 */
   .div1 p:nth-child(3) {
     color: blue;
   }

   /* .div1의 자식인 <p> 태그 중 첫 번째 */
   .div1 p:first-child {
     color: red;
   }
 
   /* .div1의 자식인 <p> 태그 중 마지막 */
   .div1 p:last-child {
     color: green;
   }
 
   /* .div1의 자식 중 마지막 자식이 아닌 <p> 태그 */
   .div1 p:not(:last-child) {
     font-size: 150%;
   }
 
   /* .div1의 자식 중 첫 번째 자식이 아닌 <p> 태그 */
   .div1 p:not(:first-child) {
     text-decoration: line-through;
   }
   ```
   * 마우스 오버(hover)
   
   ```css
   h1 {
     color: orange;
   }

   /* 마우스가 <h1> 태그에 올라갔을 때 */
   h1:hover {
     color: green;
   }
   ```

**[동작]** jQuery의 동작  

1. Class
   ```javascript
   // item에 header이라는 클래스 추가
   $('#item').addClass('header');

   // item에 header이라는 클래스 제거
   $('#item').removeClass('header');
   
   // item에 header이라는 클래스가 없으면 추가, 있으면 제거
   $('#item').toggleClass('header');
   
   // item에 header라는 클래스가 있으면 true, 없으면 false 리턴
   $("#item").hasClass('header');
   ```
2. Attribute
   ```javascript
   // 이미지 태그의 src 속성 받아오기
   $('img').attr('src');
 
   // 이미지 태그의 src 속성 지정하기
   $('img').attr('src', 'images/logo.png');
 
   // h1 태그의 텍스트 받아오기
   $('h1').text();
 
   // h1 태그에 텍스트 지정하기
   $('h1').text('Hello World!');
 
   // h1 태그에 HTML 텍스트 지정하기
   $('h1').html('<b>Hello World!</b>');
   ```
3. Style
   ```javascript
   // item의 font-weight를 bold로 지정하기
   $("#item").css('font-weight','bold');
   
   // item의 background-color 가져오기
   $("#item").css('background-color');
   ```

### 요소의 추가
`before`나 `after` 메소드를 사용하여 요소를 추가할 수 있음
```javascript
$('li').after('<li class="item">새로운 아이템</li>');
// 모든 <li> 요소 뒤에 <li class="item">새로운 아이템</li>을 추가
```

```javascript
$('#todo-list li:last-child').after('<li class="item">새로운 아이템</li>');
// id가 todo-list인 항목의 마지막 <li> 요소 뒤에 <li class="item">새로운 아이템</li>을 추가
```

`append`나 `prepend` 메소드를 사용하여 자식(child) 요소를 추가할 수 있음
```javascript
$('ul').append('<li class="item">새로운 아이템</li>');
// <ul> 안의 마지막 자식요소로 <li class="item">새로운 아이템</li>을 추가
```

따옴표(`"` 또는 `'`) 사용할 때, 같은 따옴표를 겹쳐서 사용할 경우 `\`를 앞에 추가해야 정상적으로 작동함
```javascript
$('#todo-list li:last-child').after('<li class='item'>새로운 아이템</li>');
// '<li class='까지가 하나의 문자열로 인식되고, 
// '>새로운 아이템</li>'가 다른 문자열로 인식됨

$('#todo-list li:last-child').after('<li class=\'item\'>새로운 아이템</li>');
// 안쪽에 있는 따옴표를 \'로 사용할 경우 정상적으로 작동함
```

### 요소의 이동과 삭제
`before`, `after`, `append`, `prepend` 메소드를 사용하여 요소를 이둉시킬 수 있음
```javascript
// #second 요소가 #first 요소 앞으로 이동
$('#first').before($('#second'));

// <ul>의 자식 중 .important 요소들이 맨 앞으로 이동
$(`ul`).prepend($('.important'));
```

`remove` 메소드를 사용하여 요소를 삭제할 수 있음
```javascript
// #first 요소가 삭제됨
$('#first').remove();
```

## 8. Event Object

### Event Object 들여다보기

Event Object는 event가 발생할 경우 생성되는 객체로 `.on('click', function)`, `.on('keydown', function)` 처럼 활용해 왔음  
다음과 같은 코드를 사용해서 event object를 console에서 확인할 수 있음

```Javascript
$('#home').on('click', clickHome);
function clickHome(event) {
  console.log(event);
}
```

```Javascript
$(document).on('keydown', processKeyEvent);
function processKeyEvent(e) {
  console.log(e);
}
```

### Event Handler

`$(selector).on('event', event handler function)`와 같은 코드를 통해 Event를 등록하고, Event Handler 함수를 호출할 수 있음  
Event Object를 함수 내에서 사용하고자 할 경우, 함수 선언 부분에 파라미터를 넣는 것 만으로 Event Object의 전달이 가능해짐

```Javascript
$(document).on('keydown', keyboardInput);

function keyboardInput(e) {
  console.log(e.key);
  // console에 keydown event object 중 key property의 value가 출력됨
}
```

### 다양한 event  

1. 마우스 이벤트  
   
   |    EVENT    | DESCRIPTION              |
   | :---------: | :----------------------- |
   | `mouseover` | 마우스 포인터가 영역 위로 올라올 경우 발생 |
   | `mouseout`  | 마우스 포인터가 영역에서 벗어날 경우 발생  |
   | `mousedown` | 마우스 버튼을 누를 경우 발생         |
   |  `mouseup`  | 마우스 버튼을 눌렀다 놓을 경우 발생     |
   | `mousemove` | 마우스를 움직일 경우 발생           |
   |  `dbclick`  | 더블클릭시 발생                 |
   | `dragdrop`  | 마우스를 드래그할 때 발생           |

2. 키보드 이벤트
   
   |   EVENT    | DESCRIPTION                                |
   | :--------: | :----------------------------------------- |
   | `keydown`  | 키보드의 버튼이 내려가는 순간 발생하는 이벤트                  |
   | `keypress` | 키보드의 버튼이 내려가는 순간 발생하는 이벤트(출력이 가능한 키에서만 동작) |
   |  `keyup`   | 눌러진 키보드의 버튼이 다시 올라오면서 발생하는 이벤트             |

3. 포커스 이벤트
   
   |  EVENT  | DESCRIPTION          |
   | :-----: | :------------------- |
   | `focus` | 포커스가 위치할 경우 발생       |
   | `blur`  | 포커스를 다른 곳으로 옮길 경우 발생 |

4. 입력 이벤트
   
   |  EVENT   | DESCRIPTION         |
   | :------: | :------------------ |
   | `change` | 선택 값을 바꿀 경우 발생      |
   | `input`  | 사용자가 입력을 하는 경우 발생   |
   | `select` | 입력 양식의 하나가 선택될 때 발생 |
   | `submit` | 폼을 전송하는 경우 발생       |

5. 윈도우 창 이벤트
   
   |  EVENT   | DESCRIPTION           |
   | :------: | :-------------------- |
   |  `move`  | 윈도우나 프레임을 움직일 때 발생    |
   | `resize` | 윈도우나 프레임 사이즈를 바꿀 때 발생 |

### $(document).ready와 익명함수
`<script>` 안의 요소들을 `<body>` 맨 뒤에 넣는 이유는 코드가 실행될 때 위에서부터 시행되므로, `<body>` 안의 DOM 객체들이 모두 준비가 된 후, Javascript에서 각 요소를 불러올 수 있게 하기 위함임  
  
만약, `<script>`를 `<head>`에 넣을 경우 `<body>`의 모든 요소가 준비된 후 코드를 실행하도록 하기 위해 다음과 같은 코드를 사용할 수 있음
```html
<head>
  <script>
    $(document).ready(whenReady);

    function whenReady() {
      // 실행하고자하는 javascript 코드를 안애 넣어줌
    }
  </script>
</head>
```
  
하지만, 한번 사용하기 위해 `whenReady`라는 함수명을 주면서까지 따로 정의하는 것은 비효율적이므로 **익명함수**를 사용해서 함수를 바로 정의해줄 수 있음
```html
<head>
  <script>
    $(document).ready(function() {
        // 실행하고자하는 javascript 코드를 안애 넣어줌
        // 실행하고자 하는 코드 내에 일회성 함수가 또 있다면
        //이 코드 안에서 다시 익명함수를 사용할 수 있음
      }
    );
  </script>
</head>
```

## 9. 요소 숨기기, 보여주기

### hide / show / fadeOut / fade In

```javascript
$('#photo').hide(); // 요소 숨기기
$('#photo').show(); // 요소 보여주기

$('#photo').fadeOut(1000); // 요소를 1000ms의 시간동안 Fade Out
$('#photo').fadeIn(1000); // 요소를 1000ms의 시간동안 Fade In
```

### Scroll에 적용

**새로운 개념**  

`$(window).scrollTop();`은 현재 scroll-bar의 위치를 반환해줌  
`$(iwndow).on('scroll', function)`을 통해 scroll event를 사용할 수 있음
  
  
**스크롤 할 떄마다 요소가 점점 투명해지도록 설정**

```Javascript
$(window).on('scroll', function() {
  $('.top').css('opacity', 1 - $(window).scrollTop() / $('.top').height());  
});
//$('.top').height()는 .top의 높이를 반환해줌
```

**Go to Top 버튼**

```Javascript
$('.go-to-top').on('click', function() {
  $(window).scrollTop(0);
})
```

```Javascript
// 애니매이션 넣기
$('.go-to-top').on('click', function() {
  $('html, body').animate({scrollTop: 0}, 500);
  // animate({scrollTop(이동하려는 위치)}, 걸리는 시간);
})
```

## 10. jQuery Animation

### CSS요소 적용

**CSS 적용하기**

```javascript
// 오른쪽으로 이동 : 왼쪽에 250px 만큼의 공간을 줌
$('div').animate({left: '250px'});
```

**여러 CSS 적용하기**
```javascript
// 여러 CSS 요소 적용
// 오른쪽으로 250px만큼 이동하면서 동시에 opacity 0.5가 적용됨
$('div').animate({left: '250px'}, {opacity: '0.5'});

// 위의 코드를 두개로 나눠서 작성할 경우 순서대로 적용됨
$('div').animate({left: '250px'});
$('div').animate({opacity: '0.5'});
```

**CSS 반복해서 적용하기**

`$('div').animate({left: '+=250px'});`는 CSS를 반복적용할 수 있게 해줌

```javascript
// button이 click될 때마다 오른쪽으로 250px씩 이동함
$(document).ready(function() {
  $('button').on('click', function() {
    $('div').animate({left: '+=250px'});
  })
})
```

**CSS 적용 속도 조절하기**

```javascript
// 지정된 animation이 1000ms 동안 이루어짐
// 숫자 뿐만 아니라 fast, slow로도 적용할 수 있음
$('div').animate({left: '250px'}, 1000);
```

### Animation Effect 적용하기

```javascript
// 오른족으로 250px만큼 1000ms 동안 이동하되, easeOutElastic 효과가 적용됨
$('div').animate({left: '250px'}, 1000, 'easeOutElastic')
```

이런 animation effect를 **'Easing'**이라고 하며, `linear`, `swing`, `easeInBounce`, `easeOutBounce`, `easeInBounce` 등이 존재함([참고링크](https://easings.net/))

**'Easing'**을 사용하기 위해서는 jQueryUI 코드를 추가해줘야 함([jQuery UI CDN 링크](https://code.jquery.com/ui/))
```javascript
<script
  src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"
  integrity="sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30="
  crossorigin="anonymous"></script>
```