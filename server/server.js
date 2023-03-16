import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

import bodyParser from 'body-parser';
import axios from 'axios';
import connectDB from './mongodb/connect.js';
import User from './mongodb/models/user.js';
import Showcase from './mongodb/models/showcase.js';
import mongoose from 'mongoose';
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';

dotenv.config();


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const upload = multer({ dest: 'uploads/' });

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.get('/', async (req, res) => {

  // const { data } = await axios.get('http://localhost:5000/test');
  // console.log(data);
  res.send('');
});


app.post('/signup', async (req, res) => {
  const { userName, firstName, lastName, email, password } = req.body;
  try {
    const user = await User.create({
      userName,
      email,
      firstName,
      lastName,
      password
    });
    res.send(user);
  } catch (e) {
    console.log(e);
    res.status(400).send('failed to create user');
  }
});
app.post('/signin', async (req, res) => {

  // const { userName, password } = req.body;
  // const user = await User.findOne({ userName, password });
  // if (user) {
  //   res.send('logined');
  // } else {
  //   res.send('no such user');
  // }
  try {
    console.log('g');
    const response = await axios.post('http://10.1.123.238:5000/ColorizePhoto/');
    res.send({});
  } catch (e) {
    res.send({});
  }
});

app.post('/upload-photo', upload.single('image'), async (req, res) => {
  const image = req.file.path;
  try {
    const url = await uploadPhoto(image);
    res.send(url);

  } catch (e) {
    res.send('error');
  }
});

const startServer = async (port) => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(port, () => console.log('listening on port ' + port));
  } catch (err) {
    console.error(err);

  }
};


const uploadPhoto = async (photo) => {
  const photoUrl = await cloudinary.uploader.upload(photo);
  return photoUrl;
};

startServer(4000);