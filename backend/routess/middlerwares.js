const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader ) {
        return res.status(403).json({});
    }
    try {
        const decoded = jwt.verify(authHeader, JWT_SECRET);
        req.userId = decoded.userId;
    //This is common in Express applications to attach user data to the req(request) for later use

        next();
    } catch (err) {
        return res.status(403).json({});
    }
};

module.exports = {
    authMiddleware
}
