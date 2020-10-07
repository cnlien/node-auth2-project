const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = require('express').Router();

const Users = require('../users/users-model.js');
const {
    isValid
} = require('../users/users-service.js');

router.post('/register', async (req, res, next) => {

})

router.post('/login', async (req, res, next) => {

})

function generateToken(user) {

}

module.exports = router;