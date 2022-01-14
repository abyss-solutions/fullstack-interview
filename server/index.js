// server.js
import express from "express";
import cors from "cors";

const app = express();
const port = 8080;

//setup the initial state of the board
const COLS = 7;
const ROWS = 6;

const board = new Array(ROWS).fill(null).map((r) => new Array(COLS).fill(0));

// console.log(board);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// start the server
app.listen(port, function () {
  console.log("app started");
});

// route our app
app.get("/board", function (req, res) {
  res.json(board);
});
