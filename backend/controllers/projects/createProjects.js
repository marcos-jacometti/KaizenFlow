const express = require('express');
const router = express.Router();
const { dbConnection } = require('../../db/dbConnection');

router.post('/createProject', async (req, res) => {
    const { projectNumber, projectName, description, members } = req.body;

    const createProjectQuery = `
        INSERT INTO projects (project_number, name, description) 
        VALUES (?, ?, ?)
    `;

    dbConnection.query(createProjectQuery, [projectNumber, projectName, description], (err, results) => {
        if (err) {
            console.error('Error creating project:', err);
            return res.status(500).send('Error creating project');
        }

        const projectId = results.insertId;

        const validMembers = members.filter(userId => userId !== null && userId !== undefined);
        if (validMembers.length === 0) {
            return res.status(400).send('No valid members provided');
        }

        const projectMembersQuery = `
            INSERT INTO project_members (project_id, user_id)
            VALUES ?
        `;

        const projectMembersValues = validMembers.map((userId) => [projectId, userId]);

        dbConnection.query(projectMembersQuery, [projectMembersValues], (err) => {
            if (err) {
                console.error('Error associating members to project:', err);
                return res.status(500).send('Error associating members to project');
            }

            res.status(200).send('Project created successfully');
        });
    });
});

module.exports = router;