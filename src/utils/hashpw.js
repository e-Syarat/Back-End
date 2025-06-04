const bcrypt = require("bcrypt");

const hashpw = async (password) => {
    if(!password) throw new Error("Password is required");
    return await bcrypt.hash(password, 10);
};

const verifyPassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

module.exports = { hashpw, verifyPassword };