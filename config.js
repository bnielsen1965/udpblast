module.exports = {
  // address and port of target receiver
  address: "192.168.8.138",
  port: 8000,

  // pause between messages sent
  pauseSeconds: 3,

  // message objects that will be converted into JSON strings
  messages: [
    { a: 1 },
    { b: "c" },
    { url: "https://www.google.com/" }
  ]
};
