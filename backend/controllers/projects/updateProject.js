const express = require('express');
const router = express.Router();
const { dbConnection } = require('../../db/dbConnection');

router.get('/projects/:projectId', async (req, res) => {
    const { projectId } = req.params;

    const projectQuery = `
        SELECT * FROM projects WHERE id = ?
    `;
    const membersQuery = `
        SELECT users.id, users.username, users.email FROM project_members
        JOIN users ON project_members.user_id = users.id
        WHERE project_members.project_id = ?
    `;

    dbConnection.query(projectQuery, [projectId], (err, projectResults) => {
        if (err) {
            console.error('Error fetching project:', err);
            return res.status(500).send('Error fetching project');
        }

        if (projectResults.length === 0) {
            return res.status(404).send('Project not found');
        }

        const project = projectResults[0];

        dbConnection.query(membersQuery, [projectId], (err, membersResults) => {
            if (err) {
                console.error('Error fetching project members:', err);
                return res.status(500).send('Error fetching project members');
            }

            project.members = membersResults;

            res.json(project);
        });
    });
});

module.exports = router;