import express from 'express';
import dotenv from 'dotenv';

import authroutes from './routes/auth.route.js';


dotenv.config();

const app = express();
const PORT= process.env.PORT || 5000;

app.use("/api/auth", authroutes)

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
    console.log('http://localhost:'+PORT);

})