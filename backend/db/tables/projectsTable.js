const dotenv = require('dotenv');
const envConfig = dotenv.config({ path: '../../.env' });
const { dbConnection } = require('../dbConnection');

const createTableQuery = `
    CREATE TABLE IF NOT EXISTS projects (
        id INT AUTO_INCREMENT PRIMARY KEY,
        project_number VARCHAR(100) UNIQUE NOT NULL,
        name VARCHAR(100) NOT NULL,
        description TEXT
    )
`;

dbConnection.query(createTableQuery, (err, results) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Projects table created!", results);
});

dbConnection.end();