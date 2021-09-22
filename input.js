let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {handleUserInput(key, conn)});
  return stdin;
};

const handleUserInput = function (key, conn) {
  if (key === '\u0003') {
  process.exit()};  
  if (key === "w") {
    conn.write("Move: up");
  }
  if (key === "a") {
    conn.write("Move: left");
  }
  if (key === "s") {
    conn.write("Move: down");
  }
  if (key === "d") {
    conn.write("Move: right");
  }
};

module.exports = {setupInput};