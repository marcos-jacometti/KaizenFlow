const express = require('express');
const router = express.Router();
const { dbConnection } = require('../../db/dbConnection');

router.put('/actions/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, responsible, due_date, status } = req.body;

    if (!title || !description || !responsible || !due_date || !status) {
        return res.status(400).send('Invalid data');
    }

    try {
        const updateActionQuery = `
            UPDATE actions
            SET 
                title = ?,
                description = ?,
                responsible = ?,
                due_date = ?,
                status = ?
            WHERE id = ?
        `;

        dbConnection.query(updateActionQuery, [title, description, responsible, due_date, status, id], (err, results) => {
            if (err) {
                console.error('Error updating action:', err);
                return res.status(500).send('Error updating action');
            }

            res.status(200).send('Action updated successfully');
        });
    } catch (err) {
        console.error('Internal server error:', err);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;