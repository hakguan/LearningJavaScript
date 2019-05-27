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

## 연습파일
### [기초 연습파일(basic_exercise)](https://github.com/hakguan/LearningJavaScript/tree/master/basic_exercise)
1. 데이터를 다루는 법
2. 코드의 흐름 - 함수
3. 코드의 흐름 - 반복문



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

  + for of 반복문
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

    - 일반 for 반복문과 for of 반복문이 갖는 장점
      - 조건 작성 부분 간편
      - 불필요한 변수 지정 불필요

  + for in 반복문
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

* while 반복문
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

  + while 반복문에서 break와 continue
    - break문 : while문의 조건부분과 상관 없이 반복문에서 나오게 하고 싶은 경우
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
    - continue문 : 현재 진행되고 있는 수행부분을 중단시키고 다시 조건부분을 확인하도록 하고 싶은 경우
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
      $('home').on('click', clickHome); 
      // $('선택자').메소드('파라미터', 함수명);
      // on method의 첫번째 파라미터로 문자열 'click'을, 두번째 파라미터로 함수명을 넘겨주면,
      // before 부분의 onclick="함수명();"과 동일해짐 
    </script>
    ```
      - 예시1 에서 `$('home').on('click', clickHome);` 부분은 event를 등록하는 코드이며, event handling은 `clickHome` 함수를 뜻함
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
  
    