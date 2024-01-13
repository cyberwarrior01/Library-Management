import express from 'express'
import dotenv from 'dotenv'

dotenv.config();
const app = express();
const port = process.env.Port

app.get('/', (req,res)=>{
res.send('hello backend');
})

app.listen(port, ()=>{
    console.log('The backend is on ', port);
})
 