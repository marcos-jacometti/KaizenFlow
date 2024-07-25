const express = require('express');
const router = express.Router();
const { dbConnection } = require('../../db/dbConnection');

router.post('/actions', (req, res) => {
    const { project_id, title, description, responsible, due_date, status } = req.body;

    if (!project_id || !title || !description || !responsible || !due_date || !status) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const insertActionQuery = `
        INSERT INTO actions (project_id, title, description, responsible, due_date, status)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    dbConnection.query(
        insertActionQuery,
        [project_id, title, description, responsible, due_date, status],
        (err, results) => {
            if (err) {
                console.error('Error inserting action:', err);
                return res.status(500).json({ error: 'Error inserting action' });
            }

            res.status(201).json({ message: 'Action created successfully', actionId: results.insertId });
        }
    );
});

module.exports = router;