"use strict";

async function promiseRace(promisesArray) {
  return new Promise((resolve, reject) => {
    for (const promise of promisesArray) {
      promise.then((res) => resolve(res)).catch((error) => reject(error));
    }
  });
}

async function delay(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(params), params * 1000);
    if (params === 5) {
      reject("5");
    }
  });
}

async function start() {

  let promiseArraySuccess = [];
  for (let item = 4; item > 0; item--) {
    promiseArraySuccess.push(delay(item));
  }


  let promiseArrayError = [];
  for (let item = 5; item > 0; item--) {
    promiseArrayError.push(delay(item));
  }

  try {
    const result = await promiseRace(promiseArraySuccess);
    console.log(`Success variant: ${result}`);
  } catch (e) {
    console.error(e);
  }

  try {
    const result = await promiseRace(promiseArrayError);
    console.log(result);
  } catch (e) {
    console.error(`Error variant: ${e}`);
  }
}

start();
