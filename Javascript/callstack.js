// console.log("start");

// setTimeout(() => {
//   console.log("First call");
// }, 5000);

// for (let i = 0; i < 50000; i++) {
//   console.log("i");
// }

// setTimeout(() => {
//   console.log("second call");
// }, 3000);

const processNumber = (num, callback) => {
  const result = num * 2;
  return callback(result);
};

processNumber(5, (result) => {
  console.log("Result:", result);
});

function forEachElement(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
let arr = [1, 2, 3, 4, 5, 6];
forEachElement(arr, (res) => {
  console.log("arr", res + 5);
});

function sayHello(name, callback) {
  setTimeout(() => {
    callback(`hello ${name}`);
  }, 1000);
}
sayHello("Lakshman", (callback) => {
  console.log(callback);
});

function checkEven(num, evencall, oddcall) {
  if (num % 2 == 0) {
    evencall(num);
  } else {
    oddcall(num);
  }
}

checkEven(
  21,
  (evencall) => {
    console.log("Even number:", evencall);
  },
  (oddcall) => {
    console.log("Odd number:", oddcall);
  },
);

function performTasks(num, add, multiply) {
  num = add(num);
  num = multiply(num);
  console.log(num);
}
performTasks(
  10,
  (add) => {
    return (add += 5);
  },
  (multiply) => {
    return (multiply *= 2);
  },
);
