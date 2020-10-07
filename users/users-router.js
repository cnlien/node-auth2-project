const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restrictedMiddleware.js');
const checkDept = require('../auth/checkDeptMiddleware.js');

router.get('/', restricted, checkDept(1), async (req, res, next) => {
    try {
        const users = await Users.find();
        res.status(200).json(users);
    }
    catch (err) {
        next({
            apiCode: 500,
            apiMessage: "There was an error retrieving information from the server",
            error: err
        })
    }
})

router.delete(':id', restricted, checkDept(1), async (req, res, next) => {
    try {
        res.status(501).json({
            message: 'Not authorized to delete'
        })
    }
    catch (err) {
        next({
            apiCode: 500,
            apiMessage: "There was an error deleting the user",
            message: err
        })
    }
})

router.post('/', restricted, checkDept(1), (req, res, next) => {
    try {
        res.status(501).json({
            message: 'Not authorized to add a user'
        })
    }
    catch (err) {
        next({
            apiCode: 500,
            apiMessage: "There was an error adding the user",
            message: err
        })
    }
})

router.put('/:id', restricted, checkDept(1), (req, res, next) => {
    try {
        res.status(501).json({
            message: 'Not authorized to update the user'
        })
    }
    catch (err) {
        next({
            apiCode: 500,
            apiMessage: "There was an error updating the user",
            message: err
        })
    }
})

module.exports = router;

