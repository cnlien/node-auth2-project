const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const errHandler = require('./errorHandler.js')

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(logger);

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
    res.json({
        message: 'Server is running'
    })
})

function logger(req, res, next) {
    console.log(`Method: ${req.method} request`)
    console.log(`URL: ${req.url}`)
    console.log(`AT: ${new Date().toISOString()}`)
    next();
}

server.use(errHandler);

module.exports = server;