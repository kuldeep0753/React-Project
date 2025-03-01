//1.closure example: lexical scope
function counter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
  };
}

const myCounter = counter();
myCounter.increment(); // Count: 1
myCounter.increment(); // Count: 2
myCounter.decrement();

//2.Currying : a technique where a fucntion takes multiple arguments and transform each function  takes one argument at a time and returns another function
function add(a) {
  return function add1(b) {
    console.log(a + b);
  };
}
let addValue = add(3);
addValue(2);
