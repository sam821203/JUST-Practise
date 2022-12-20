async function foo() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('hello'), 1000)
  });

  // wait until the promise above resolves with the word hello
  let message = await promise;

  alert(message);
}