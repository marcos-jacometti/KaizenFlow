const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { dbConnection } = require("../../db/dbConnection");

require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

console.log('JWT_SECRET:', JWT_SECRET); // Verifique se o JWT_SECRET está sendo carregado

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    console.log('Login attempt:', { username, password }); // Log de tentativa de login

    try {
        const findUserQuery = `
            SELECT * FROM users WHERE username = ?
        `;

        dbConnection.query(findUserQuery, [username], async (err, results) => {
            if (err) {
                console.error('Database query error:', err); // Log de erro na consulta ao banco de dados
                return res.status(500).send('Internal server error');
            }

            if (results.length === 0) {
                console.log('User not found:', username); // Log quando o usuário não for encontrado
                return res.status(404).send('User not found');
            }

            const user = results[0];
            console.log('User from database:', user); // Log do usuário recuperado do banco de dados

            const passwordMatch = await bcrypt.compare(password, user.password);
            console.log('Password comparison result:', passwordMatch); // Log do resultado da comparação da senha

            if (!passwordMatch) {
                console.log('Incorrect password for user:', username); // Log quando a senha está incorreta
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

            console.log('Generated token:', token); // Log do token gerado

            res.status(200).json({ token });
        });
    } catch (err) {
        console.error('Internal server error:', err); // Log de erro interno do servidor
        res.status(500).send('Internal server error');
    }
});

module.exports = router;