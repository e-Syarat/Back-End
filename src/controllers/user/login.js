const db = require('../../models/index.js');
const validation = require ('../../utils/loginValidation.js');
const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken');


const user = db.user;


const register = async (req, res) => {
      try {
        const { username, email, password } = req.body;
  
        const existingUser = await user.findOne({ where: { email } });
        if (existingUser) {
          return res.status(400).json({ message: 'Email sudah terdaftar' });
        }
  
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await user.create({
          username,
          email,
          password: hashedPassword,
        });
  
        res.status(201).json({ message: 'Register berhasil', userId: newUser.id });
      } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan', error: error.message });
      }
    }

const login = async (req, res) => {
    const { email, password } = req.body;

    const { error } = validation.loginValidation({ email, password });
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const foundUser = await user.findOne({ where: { email } });

        if (!foundUser || !await bcrypt.compare(password, foundUser.password)) {
            return res.status(401).json({ error: 'Email atau password salah' });
        }

        const token = jwt.sign({ id: foundUser.id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        

          return res.status(200).json({ message: 'Login berhasil', token });
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });

    }
}

module.exports = {
    login,
    register
}