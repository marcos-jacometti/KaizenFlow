const dotenv = require('dotenv');
const envConfig = dotenv.config({ path: '../../.env' });
const { dbConnection } = require('../dbConnection');

const createAttendanceTableQuery = `
    CREATE TABLE IF NOT EXISTS attendance (
        id INT AUTO_INCREMENT PRIMARY KEY,
        project_id INT NOT NULL,
        user_id INT NOT NULL,
        date DATE NOT NULL,
        status VARCHAR(50) NOT NULL,
        FOREIGN KEY (project_id) REFERENCES projects(id),
        FOREIGN KEY (user_id) REFERENCES users(id)
    )
`;

dbConnection.query(createAttendanceTableQuery, (err, results) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("ProjectMembers table created!", results);
});

dbConnection.end();