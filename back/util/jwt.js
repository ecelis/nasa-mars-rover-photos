const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();
const secret = process.env.JWT_SECRET;
     
function generateAccessToken(username) {
   const token = jwt.sign(
    {id: 1, username: username},
    secret,
    { expiresIn: '1y' });
   return token
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token === null) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);

        req.user = user;

        next();
    })
}

module.exports = {
    generateAccessToken,
    authenticateToken
}
