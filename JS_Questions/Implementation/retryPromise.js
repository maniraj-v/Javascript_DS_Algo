async function retryPromises(asyncFunc, retryCount = 3) {
  try {
    const resp = await asyncFunc();
    return resp;
  } catch (err) {
    console.log(err, "retrying", retryCount);
    if (retryCount - 1 > 0) {
      return retryPromises(asyncFunc, retryCount - 1);
    } else {
      throw err;
    }
  }
}

let counter = 0;
const print = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      counter++;
      if (counter > 2) {
        resolve("resolved promise");
      } else {
        reject("rejected promise");
      }
    }, 2000);
  });
};

retryPromises(print, 3)
  .then((resp) => {
    console.log({ resp });
  })
  .catch((err) => {
    console.error("Final failure:", err);
  });
