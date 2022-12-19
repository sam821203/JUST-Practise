let begin = Date.now();

const output = (x) => console.log(`${x} \n  elapsed: ${Date.now() - begin}`);

// const blocking = () => {
//   let i = 0;
//   while (i < 1000000000) {
//     i++;
//   }
//   return "blocking done";
// };

const unblocking = () => {
  return Promise.resolve().then(() => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    return "All done";
  });
};

output("synchronous 1");
output(unblocking().then((data) => output(data)));
output("synchronous 2");
