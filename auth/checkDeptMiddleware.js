module.exports = function (department) {
    return function (req, res, next) {
        req.decodedToken && req.decodedToken.department && req.decodedToken.department === department
            ? next()
            : res.status(403).json({
                message: 'User is not authorized to make that request'
            })
    }
}