const express = require('express');
const router = express.Router();
const { dbConnection } = require('../db/dbConnection');

router.get('/actionsAPI/:projectId', (req, res) => {
    const { projectId } = req.params;
    const getActionsQuery = 'SELECT * FROM actions WHERE project_id = ?';

    dbConnection.query(getActionsQuery, [projectId], (err, results) => {
        if (err) {
            console.error('Error fetching actions:', err);
            return res.status(500).send('Error fetching actions');
        }

        res.status(200).json(results);
    });
});

module.exports = router;