import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';
import connection from './database/db.js'
import Routes from './routes/route.js';

const app = express()
const PORT = 8000
app.use(cors())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Routes)

connection()

app.listen(PORT, () => {
    console.log(`Your server is running successfully on PORT ${PORT}`);
})