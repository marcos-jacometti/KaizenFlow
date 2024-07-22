const dotenv = require('dotenv');
const envConfig = dotenv.config({ path: '../.env' });
const { connection } = require('./dbConnection');

const createDatabaseQuery = `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`;

connection.query(createDatabaseQuery, (err, results) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(results);
});

connection.end();