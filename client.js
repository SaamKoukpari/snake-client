const net = require("net");
const {setupInput} = require("./input");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
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