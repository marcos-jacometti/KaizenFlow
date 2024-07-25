const express = require('express');
const router = express.Router();
const { dbConnection } = require('../../db/dbConnection');

router.put('/project/:id', async (req, res) => {
    const { id } = req.params;
    const { project_number, name, description, members } = req.body;

    if (!project_number || !name || !description || !Array.isArray(members)) {
        return res.status(400).send('Invalid data');
    }

    try {
        const updateProjectQuery = `
            UPDATE projects
            SET 
                project_number = ?,
                name = ?,
                description = ?
            WHERE id = ?
        `;

        dbConnection.query(updateProjectQuery, [project_number, name, description, id], (err, results) => {
            if (err) {
                console.error('Error updating project:', err);
                return res.status(500).send('Error updating project');
            }

            const deleteMembersQuery = 'DELETE FROM project_members WHERE project_id = ?';
            dbConnection.query(deleteMembersQuery, [id], (err) => {
                if (err) {
                    console.error('Error deleting project members:', err);
                    return res.status(500).send('Error updating project members');
                }

                const insertMembersQuery = 'INSERT INTO project_members (project_id, user_id) VALUES ?';
                const memberValues = members.map(userId => [id, userId]);

                dbConnection.query(insertMembersQuery, [memberValues], (err) => {
                    if (err) {
                        console.error('Error inserting project members:', err);
                        return res.status(500).send('Error updating project members');
                    }

                    res.status(200).send('Project updated successfully');
                });
            });
        });
    } catch (err) {
        console.error('Internal server error:', err);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;