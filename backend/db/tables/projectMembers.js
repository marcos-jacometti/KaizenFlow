const dotenv = require('dotenv');
const envConfig = dotenv.config({ path: '../../.env' });
const { dbConnection } = require('../dbConnection');

const createProjectMembersTableQuery = `
    CREATE TABLE IF NOT EXISTS project_members (
        id INT AUTO_INCREMENT PRIMARY KEY,
        project_id INT NOT NULL,
        user_id INT NOT NULL,
        FOREIGN KEY (project_id) REFERENCES projects(id),
        FOREIGN KEY (user_id) REFERENCES users(id)
    )
`;

dbConnection.query(createProjectMembersTableQuery, (err, results) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("ProjectMembers table created!", results);
});

dbConnection.end();