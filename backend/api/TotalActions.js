const express = require('express');
const router = express.Router();
const { dbConnection } = require('../db/dbConnection');

router.get('/AllActions', (req, res) => {
    const getAllActionsQuery = 'SELECT * FROM actions';

    dbConnection.query(getAllActionsQuery, (err, results) => {
        if (err) {
            console.error('Error fetching actions:', err);
            return res.status(500).send('Error fetching actions');
        }

        res.status(200).json(results);
    });
});

module.exports = router;