// server.js
import express from 'express';
import cors from 'cors';

const app = express();
const port = 8080;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}))

// start the server
app.listen(port, function() {
  console.log('app started');
});

// route our app
app.get('/', function(req, res) {
  res.send('hello world!');
});