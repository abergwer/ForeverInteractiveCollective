import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.get('/', async (req, res) => {

  res.json('');
});

app.listen(3000, () => console.log("server is on"));