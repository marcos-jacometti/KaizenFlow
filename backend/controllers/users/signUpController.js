const express = require('express');
const router = express.Router();
const multer = require('multer');
const { dbConnection } = require('../../db/dbConnection');
const bcrypt = require('bcrypt');
const path = require('path');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/createUser', upload.single('profilePicture'), async (req, res) => {
    const { username, email, password } = req.body;
    const profilePicture = req.file ? req.file.buffer : null;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const createUserQuery = `
            INSERT INTO users (username, email, password, profilePicture) 
            VALUES (?, ?, ?, ?)
        `;

        dbConnection.query(createUserQuery, [username, email, hashedPassword, profilePicture], (err, results) => {
            if (err) {
                console.error('Error creating user:', err);
                return res.status(500).send('Error creating user');
            }
            res.status(200).send('User created successfully');
        });
    } catch (err) {
        console.error('Error hashing password:', err);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;