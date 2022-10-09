const events = require("events");

const eventEmitter = new events.EventEmitter();

const startListener = (data) => {
  console.log("start", data);
};
eventEmitter.addListener("forLoopStart", startListener);
eventEmitter.addListener("forLoopStart", (listenerData) => {
  console.log("listenerData", listenerData);
});
eventEmitter.on("forLoopEnd", (data) => {
  console.log("loopEnd", data);
});
eventEmitter.once("forLoopStart", (d) => {
  console.log("d", d);
});

const forLoop = () => {
  eventEmitter.emit("forLoopStart", Date.now());
  for (let i = 0; i < 4000; i++) {}
  eventEmitter.emit("forLoopEnd", Date.now());
};
eventEmitter.emit("forLoopStart", Date.now());

eventEmitter.setMaxListeners(2);
forLoop();
