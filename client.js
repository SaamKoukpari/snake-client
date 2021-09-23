const net = require("net");
const {setupInput} = require("./input");
const {IP, PORT} = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    IP,
    PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });  
  
  conn.on('connect', (data) => {
  conn.write('Move: up', data);
  });

  conn.on('connect', () => {
    conn.write('Name: BLU');
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {connect};