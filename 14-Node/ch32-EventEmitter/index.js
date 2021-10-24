'use strict';

const EventEmitter = require('events');

class ChatManager extends EventEmitter {}

const chatManager = new ChatManager();

chatManager.on("join", () => {
  console.log("new user joined")
})

chatManager.emit("join");
// new user joined
