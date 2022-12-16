let eventLoop = [];
let myEvent;

// it runs forever
// while(true) {
//   if (eventLoop.length > 0) {
//     // want to get the next event in the queue
//     myEvent = eventLoop.shift();

//     // execute the event
//     try {
//       myEvent();
//       removeEventFromQueue();
//     }
//     catch(err) {
//       reportError(err);
//     }
//   }
// }