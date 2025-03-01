// 1.Compare NaN
// let a=NaN, b=NaN;
// console.log(typeof a)
// console.log(typeof b)
// console.log(a==b)
// console.log(a===b)
// console.log(Number.isNaN(a)===Number.isNaN(b));

// 2.
// let num ="12";
// console.log(num+1); //121
// console.log(++num); //13
// console.log(num++); //12-->13

//3.
// let a=10;
// let b=++a; //11--> a=a+1=>11 that's why 22
// console.log(a+b); //21 --->22

//4 Array 
// let ch="JS";
// ch[1] = "Q";// strings cannot be modified after they are created
// console.log(ch); //JQ

// 5.Increement
// let a=1;
// const sum =++a  + a++; //2 + 2
// console.log(sum); //4

//6.Destructure
// [a] = [4,2,3,5,6];
// console.log(a);//4

//7. And && The && (logical AND) operator returns the first falsy value it encounters.
// If both values are truthy, it returns the last truthy value
let p="Hi", q="hello";
let result = p && q;
let check = !!(p && q)
console.log(check) // true
console.log(result); // "hello"