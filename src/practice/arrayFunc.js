
// 배열 고차 함수
const arr = [1,2,3,4,5];

// 배열 단순 반복 forEach()
// for (let n of arr) {
//     console.log(n ** 2);
// }

arr.forEach((n) => {
    console.log(n ** 2);
});

// 배열 내부 값을 조작해서 새로운 배열 만들기 map()
// const doubleArr = [];
// for (let n of arr) {
//     doubleArr.push(n ** 2);
// }
// console.log(doubleArr);

const doubleArr = arr.map(n =>  n ** 2);
console.log(doubleArr);

// 배열에서 원하는 조건의 값만 추출해서 새 배열 생성: filter()
// const oddArr = [];
// for (let n of arr) {
//     if (n % 2 === 1) {
//         oddArr.push(n);
//     }
// }
// console.log(oddArr);

const oddArr = arr.filter(n => n % 2 === 1);
console.log(oddArr);