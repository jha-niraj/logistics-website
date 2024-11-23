const jwt = require("jsonwebtoken");

const userMiddleware = (req, res, next) => {
    // Check if Authorization header exists
    const sessionToken = req.headers.authorization;
    
    if (!sessionToken) {
        return res.status(401).json({
            msg: "No authorization header found"
        });
    }

    // Get token from Bearer string
    const token = sessionToken.split(" ")[1];
    
    if (!token) {
        return res.status(401).json({
            msg: "No token provided, authorization denied"
        });
    }

    try {
        const decodedValue = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedValue._id;
        next();
    } catch (err) {
        return res.status(401).json({
            msg: "Invalid token",
            error: err.message
        });
    }
};

module.exports = userMiddleware;