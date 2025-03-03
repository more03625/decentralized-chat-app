const crypto = require('crypto');
require('dotenv').config();

// Generate AES-256 key from environment variable
const SECRET_KEY = crypto.createHash('sha256').update(process.env.SECRET_KEY).digest();

// AES Encryption
function encryptMessage(message) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', SECRET_KEY, iv);
    let encrypted = cipher.update(message, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return iv.toString('hex') + ':' + encrypted;
}

// AES Decryption
function decryptMessage(encryptedMessage) {
    const [iv, encrypted] = encryptedMessage.split(':');
    const decipher = crypto.createDecipheriv('aes-256-cbc', SECRET_KEY, Buffer.from(iv, 'hex'));
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

module.exports = { encryptMessage, decryptMessage };
