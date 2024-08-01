const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { dbConnection } = require("../../db/dbConnection");
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

console.log('JWT_SECRET:', JWT_SECRET); // Verifica se JWT_SECRET está sendo carregado

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    console.log('Login attempt:', username);

    try {
        const findUserQuery = `
            SELECT * FROM users WHERE username = ?
        `;

        dbConnection.query(findUserQuery, [username], async (err, results) => {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).send('Internal server error');
            }

            if (results.length === 0) {
                console.log('User not found');
                return res.status(404).send('User not found');
            }

            const user = results[0];
            console.log('User found:', user);

            const passwordMatch = await bcrypt.compare(password, user.password);
            console.log('Password match:', passwordMatch);

            if (!passwordMatch) {
                console.log('Incorrect password');
                return res.status(401).send('Incorrect password');
            }

            let profilePictureBase64 = null;
            if (user.profilePicture) {
                profilePictureBase64 = `data:image/jpeg;base64,${user.profilePicture.toString('base64')}`;
            }

            const token = jwt.sign(
                {
                    userId: user.id,
                    username: user.username,
                    email: user.email,
                    profilePicture: profilePictureBase64
                },
                JWT_SECRET,
                { expiresIn: '2h' }
            );

            console.log('Token generated:', token);
            res.status(200).json({ token });
        });
    } catch (err) {
        console.error('Catch block error:', err);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;
