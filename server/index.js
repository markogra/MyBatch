const express = require("express");
const app = express();

const PORT = 3500;
const router = require("./router");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, function () {
  console.log("MyBatch server listening on port " + PORT);
});
