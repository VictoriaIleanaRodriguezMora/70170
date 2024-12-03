let arr = [];
let obj = {};

async function code() {
  try {
    for (let i = 0; i < 100; i++) {
      const numRandom = Math.floor(Math.random() * 20);
      console.log(numRandom);
      if (obj[numRandom]) {
        obj[numRandom]++
      } else {
        obj[numRandom] = 1
      }
    }
    console.log(obj);
  }
  catch (err) {
    console.log(err);
  }
}

code()

console.log("La operación terminó");