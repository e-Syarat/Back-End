const db = require('../../models/index.js');
const validation = require ('../../utils/loginValidation.js');
const bcrypt = require('bcrypt');


const user = db.user;

const login = async (req, res) => {
    const { username, password } = req.body;

    const { error } = validation.loginValidation({ username, password });
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const foundUser = await user.findOne({ where: { username } });

        if (!foundUser || !await bcrypt.compare(password, foundUser.password)) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        return res.status(200).json({ message: 'Login successful', userId: foundUser.id });
    } catch (error) {
        console.error('Login Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });

    }
}

module.exports = {
    login
}