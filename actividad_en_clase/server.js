let arr = [];
let obj = {};

for (let i = 0; i < 100; i++) {
  const numRandom = Math.floor(Math.random() * 20);
  console.log(numRandom);
  // arr[i] = numRandom;

  if (obj[numRandom]) {
    obj[numRandom]++
  } else {
    obj[numRandom] = 1
  }
}

console.log("La operación terminó");

console.log(obj);