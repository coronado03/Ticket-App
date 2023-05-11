const express = require('express')
import {Request, Response} from "express"
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000


const app = express();


app.get('/', (req: Request, res: Response) => {
    res.json({test1: 'First test', test2: 'Second Test'})
})

//Here we'll have our routes
app.use('/api/users', require('./routes/userRoutes'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));