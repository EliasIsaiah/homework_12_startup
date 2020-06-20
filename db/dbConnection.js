const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: "sandbox_db"
  });

  console.log("user", process.env.DB_USER);
  console.log("password", process.env.DB_PW);
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("db connected")
  });
  
  module.exports = connection;