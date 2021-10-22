const express = require("express");
const { Pool } = require("pg");
const bodyParser = require("body-parser");
const process = require("process");
const cors = require("cors");

// create a new Express app server object
const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// set the port for the Node application
const port = process.env.PORT || 8000;

// create a client instance of the pg library
const client = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

app.get("/api/todos", async (req, res) => {
  try {
    const response = await client.query("SELECT * FROM todos;");
    const { rows } = response;
    res.json(rows);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

app.post("/api/todo", async (req, res) => {
  const { title, description, isChecked } = req.body;
  try {
    await client.query(
      "INSERT INTO todos(title, description, isChecked) VALUES($1, $2, $3)",
      [title, description, isChecked]
    );
  } catch (e) {
    res.sendStatus(500);
    return;
  }
  res.sendStatus(200);
});

app.patch("/api/todo/:id", async (req, res) => {
  const { id } = req.params;
  const { title, desc, isChecked } = req.body;
  console.log(id);
  console.log(req.body);
  try {
    await client.query(
      "UPDATE todos SET title = $1, description = $2, isChecked = $3 WHERE todoid = $4",
      [title, desc, isChecked, id]
    );
  } catch (e) {
    res.sendStatus(500);
    return;
  }
  res.sendStatus(200);
});

app.delete("/api/todo/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await client.query("DELETE FROM todos WHERE todoid = $1", [id]);
  } catch (e) {
    res.sendStatus(500);
    return;
  }
  res.sendStatus(200);
});

var server = app.listen(port, function () {
  console.log(
    `\nPostgres Node server is running on port: ${server.address().port}`
  );
});
