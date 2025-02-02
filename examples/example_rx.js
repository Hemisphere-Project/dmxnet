// Load hartnet as libary
var hartnet = require('../hartnet.js');

// Create new hartnet instance
var artnet = new hartnet.hartnet({
  hosts: ['10.0.0.0'],
});

// Create a new receiver instance, listening for universe 0 on net 0 subnet 0
var receiver = artnet.newReceiver({
  subnet: 0,
  universe: 0,
  net: 0,
});

// Dump data if DMX Data is received
receiver.on('data', function(data) {
  console.log('DMX data:', data);
});
