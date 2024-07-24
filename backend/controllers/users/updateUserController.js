const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { dbConnection } = require('../../db/dbConnection');
const bcrypt = require('bcrypt');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/profilePictures');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

router.put('/user/:id', upload.single('profilePicture'), async (req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;
    const profilePicture = req.file ? req.file.filename : null;

    if (!password) {
        return res.status(400).send('Password is required');
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const updateUserQuery = `
            UPDATE users
            SET 
                username = COALESCE(?, username),
                email = COALESCE(?, email),
                password = ?,
                profilePicture = COALESCE(?, profilePicture)
            WHERE id = ?
        `;

        dbConnection.query(updateUserQuery, [username, email, hashedPassword, profilePicture, id], (err, results) => {
            if (err) {
                console.error('Error updating user:', err);
                return res.status(500).send('Error updating user');
            }

            res.status(200).send('User updated successfully');
        });
    } catch (err) {
        console.error('Error hashing password:', err);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;