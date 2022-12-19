console.log("hi 1");

// macro task - added to the task queue and executed on the next round of the event loop
setTimeout(() => console.log("timeout"), 0);

// micro task - added to the micro task queue and they are executed before the start of the next event loop
Promise.resolve().then(() => console.log("Promise"));

console.log("hi 2");
