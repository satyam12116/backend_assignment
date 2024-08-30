const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_secret_key';

function generateToken(payload, expiresIn = '1h') {
    return jwt.sign(payload, JWT_SECRET, { expiresIn });
}
function verifyToken(token) {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (err) {
        throw new Error('Invalid or expired token');
    }
}
module.exports = {
    generateToken,
    verifyToken,
};
