import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.get('/', async (req, res) => {
  const { data } = await axios.get('http://localhost:5000/test');
  console.log(data);
  res.json('');
});

app.listen(4000, () => console.log("server is on port 4000"));