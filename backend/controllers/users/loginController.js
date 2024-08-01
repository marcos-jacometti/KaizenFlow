const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { dbConnection } = require("../../db/dbConnection");

require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const findUserQuery = `
            SELECT * FROM users WHERE username = ?
        `;

        dbConnection.query(findUserQuery, [username], async (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Internal server error');
            }

            if (results.length === 0) {
                return res.status(404).send('User not found');
            }

            const user = results[0];
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (!passwordMatch) {
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

            res.status(200).json({ token });
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;