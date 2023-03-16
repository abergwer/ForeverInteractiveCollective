import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

import bodyParser from 'body-parser';
import axios from 'axios';
import connectDB from './mongodb/connect.js';
dotenv.config();


const app = express();

app.use(cors());
app.use(bodyParser.json());


app.get('/', async (req, res) => {
  const { data } = await axios.get('http://localhost:5000/test');
  console.log(data);
  res.json('');
});

app.post('/upload-photo');

const startServer = async (port) => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(port, () => console.log('listening on port ' + port));
  } catch (err) {
    console.error(err);

  }
};

startServer(4000);