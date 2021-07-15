
const Config = require('./config');
const DGram = require('dgram');

console.log('Start...');
sendMessages()
.then(() => {
  console.log('Complete');
  process.exit(0);
})
.catch(error => {
  console.log(error.message);
  process.exit(1);
});


// send all messages sequentially
async function sendMessages () {
  for (let i = 0; i < Config.messages.length; i++) {
    // could use the same client over and over but we'll create a new client each time
    let client = DGram.createSocket('udp4');
    // send message and wait for completion
    await send(client, JSON.stringify(Config.messages[i]));
    // done with this client
    client.close();
    // if not done then wait before sending next message
    if (i < Config.messages.length - 1) await delay(Config.pauseSeconds * 1000);
  }
}

// send message string using client
function send (client, msg) {
  // using promise so we can resolve in the completed function
  return new Promise((resolve, reject) => {
    client.send(msg, 0, msg.length, Config.port, Config.address, (error, bytes) => {
      if (error) throw new Error(error);
      console.log(`Sent ${bytes} bytes to ${Config.address}:${Config.port}.`);
      resolve();
    });
  });
}

// delay for ms milliseconds
function delay (ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}
