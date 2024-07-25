const dotenv = require('dotenv');
const envConfig = dotenv.config({ path: '../../.env' });
const { dbConnection } = require('../dbConnection');

const createActionsTableQuery = `
    CREATE TABLE IF NOT EXISTS actions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        project_id INT NOT NULL,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        responsible INT NOT NULL,
        due_date DATE,
        status ENUM('In Progress', 'Delayed', 'Completed') DEFAULT 'In Progress',
        FOREIGN KEY (project_id) REFERENCES projects(id),
        FOREIGN KEY (responsible) REFERENCES users(id)
    )
`;

dbConnection.query(createActionsTableQuery, (err, results) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Actions table created!", results);
});

dbConnection.end();