import express from 'express'
import connectDB from './db.ts';

const app = express()

connectDB();

app.use(express.json())

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`))