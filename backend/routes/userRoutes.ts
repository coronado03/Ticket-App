const express = require('express')
import {Request, Response} from "express"

const router = express.Router()

router.post('/', (req: Request, res: Response) => {
    res.send('Register Route')
})

module.exports = router