const express = require("express");
const app = express();

app.use(express.json());

const database = [
  { id: 1, name: "vasu" },
  { id: 2, name: "deva" },
  { id: 3, name: "monster" },
];
app.get("/api/course", (req, res) => {
  res.send(database);
});

app.listen(3001, () => {
  console.log("port is running at 3001");
});
