let x = 1;

function test() {
  console.log(x); // undefined, because of hoisting
  var x = 2;
  console.log(x); // 2, because the local variable x is now defined and shadows the global x
}

test();
console.log(x); // 1, because the global variable x is not affected by the local variable x in the function
