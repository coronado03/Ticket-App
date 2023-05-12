const express = require('express')
const colors = require('colors')
import {Request, Response} from "express"
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 8000

// Connect to database
connectDB()


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get('/', (req: Request, res: Response) => {
    res.json({test1: 'First test', test2: 'Second Test'});
})

//Here we'll have our routes
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));