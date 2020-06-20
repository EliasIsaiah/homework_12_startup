const mysql = require('mysql')
let connection = "";
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: "sandbox_db"
  });
}

console.log("user", process.env.DB_USER);
console.log("password", process.env.DB_PW);

connection.connect(function (err) {
  if (err) throw err;
  console.log("db connected")
});

module.exports = connection;