console.log("start");

setTimeout(() => {
  console.log("First call");
}, 5000);

for (let i = 0; i < 50000; i++) {
  console.log("i");
}

setTimeout(() => {
  console.log("second call");
}, 3000);
