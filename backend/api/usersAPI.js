const express = require('express');
const router = express.Router();
const { dbConnection } = require('../db/dbConnection');

router.get('/users', (req, res) => {
    const getUsersQuery = 'SELECT * FROM users';

    dbConnection.query(getUsersQuery, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).send('Error fetching users');
        }

        const usersWithImages = results.map(user => {
            if (user.profilePicture) {
                user.profilePicture = `data:image/jpeg;base64,${user.profilePicture.toString('base64')}`;
            }
            return user;
        });

        res.status(200).json(usersWithImages);
    });
});

module.exports = router;