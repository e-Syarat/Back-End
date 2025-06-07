const rateLimiter = require ('express-rate-limit');

const rateLimit = rateLimiter ({ windowMs: 15 * 60 * 1000,
max:3,
message: {
    error:'Terlalu banyak percobaan login. Silakan coba lagi dalam 15 menit'
},
standardHeaders:true,
legacyHeaders:false
})

module.exports = {
    rateLimit
}