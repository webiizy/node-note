const crypto = require('crypto');

const randomId = crypto.randomBytes(16).toString("hex");

console.log(randomId);