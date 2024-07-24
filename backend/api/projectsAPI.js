const express = require('express');
const router = express.Router();
const { dbConnection } = require('../db/dbConnection');

router.get('/projects', (req, res) => {
    const getProjectsQuery = 'SELECT * FROM projects';

    dbConnection.query(getProjectsQuery, (err, results) => {
        if (err) {
            console.error('Error fetching projects:', err);
            return res.status(500).send('Error fetching projects');
        }

        res.status(200).json(results);
    });
});

module.exports = router;