const jwt = require ('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.header('Authorization');
  
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Access denied. No token provided.' });
    }
  
    // Ekstrak token setelah "Bearer"
    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret_key');
        req.admin = decoded;
        next();
      } catch (err) {
        res.status(400).json({ error: 'Invalid or expired token' });
      }
    };


    module.exports = {
        authMiddleware
    }