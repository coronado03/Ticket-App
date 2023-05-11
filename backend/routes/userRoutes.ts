const express = require('express')
import {Request, Response} from "express"

const { registerUser, loginUser } = require('../controllers/userController')

const router = express.Router();

router.post('/', registerUser)

router.post('/login', loginUser)

module.exports = router