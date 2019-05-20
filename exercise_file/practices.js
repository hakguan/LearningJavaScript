/* ---------------------------------------- */
console.log("1-7. 숫자형 연습")

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
console.log("1-8. 자료형 활용하기1")

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
console.log("1-13. 자료형 활용하기2")

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
console.log("2-2. 함수 부려먹기1")

// 여기에 logParticipant 함수를 써주세요.
// 코드를 작성해주세요.
function logParticipant(name) {
    console.log(name + "(이)가 대화에 참여했습니다.")
}

// 테스트 코드
logParticipant('동욱');
logParticipant('신의');
logParticipant('윤수');
logParticipant('지은');
logParticipant('동준');
logParticipant('영훈');

/* ---------------------------------------- */
console.log("2-4. 함수 부려먹기2")

// 여기에 expressMultiplication 함수를 써주세요.
// 코드를 작성해주세요.
function expressMultiplication(x, y) {
    console.log(String(x) + " * " + String(y) + " = " + String(x * y))
}

// 테스트 코드
expressMultiplication(3, 4);
expressMultiplication(3, 2);
expressMultiplication(7, 5);
expressMultiplication(8, 9);
expressMultiplication(5, 5);
expressMultiplication(9, 9);

/* ---------------------------------------- */
console.log("2-7. 함수 부려먹기3")

// calculateRectangleArea라는 이름의 함수를 만드세요.
// 이 함수는 가로와 세로를 입력받아서 넓이를 return 해주어야 합니다.
function calculateRectangleArea(width, height) {
    area = width * height;
    return area;
}

// 테스트 코드
var area1 = calculateRectangleArea(3, 4); // 가로 3, 세로 4인 직사각형의 넓이 계산
var area2 = calculateRectangleArea(5, 8); // 가로 5, 세로 8인 직사각형의 넓이 계산
var area3 = calculateRectangleArea(7, 2); // 가로 7, 세로 2인 직사각형의 넓이 계산

console.log('Area1: ' + area1 + ', Area2: ' + area2 + ', Area3: ' + area3);

/* ---------------------------------------- */
console.log("2-11. 서열 정리")

function whatShouldICallYou(myAge, myGender, yourAge, yourGender) {
    // 나의 나이, 나의 성별, 상대방의 나이, 상대방의 성별
    // 총 4개의 정보를 활용해서 호칭을 결정해보세요.
    if (myAge === yourAge) {
        return '친구';
    } else if (myAge > yourAge) {
        if (yourGender === 'male') {
            return '남동생';
        } else if (yourGender === 'female') {
            return '여동생';
        }
    } else if (myGender === 'male') {
        if (yourGender === 'male') {
            return '형';
        } else if (yourGender === 'female') {
            return '누나';
        }
    } else if (myGender === 'female') {
        if (yourGender === 'male') {
            return '오빠';
        } else if (yourGender === 'female') {
            return '언니';
        }
    }
}

// 테스트 코드
var result1 = whatShouldICallYou(23, 'male', 25, 'female');
var result2 = whatShouldICallYou(21, 'female', 21, 'female');
var result3 = whatShouldICallYou(25, 'female', 22, 'male');

console.log(result1);
console.log(result2);
console.log(result3);