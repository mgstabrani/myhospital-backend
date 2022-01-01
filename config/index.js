const mysql = require('mysql');
require('dotenv').config();

const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

con.connect((err) => {
  if (err) throw err;
});
