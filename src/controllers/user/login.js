const db = require('../../models/index.js');
const validation = require ('../../utils/loginValidation.js');
const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken');


const user = db.user;


const register = async (req, res) => {
      try {
        const { username, password } = req.body;
  
        // Cek apakah username sudah ada
        const existingUser = await user.findOne({ where: { username } });
        if (existingUser) {
          return res.status(400).json({ message: 'Username sudah terdaftar' });
        }
  
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
  
        // Simpan user
        const newUser = await user.create({
          username,
          password: hashedPassword,
        });
  
        res.status(201).json({ message: 'Register berhasil', userId: newUser.id });
      } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan', error: error.message });
      }
    }

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

        const token = jwt.sign({ id: username.id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
          });

          return res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Login Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });

    }
}

module.exports = {
    login,
    register
}