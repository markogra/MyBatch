import express, { Express } from "express";
const app: Express = express();

const PORT: number = 3500;
import { router } from "./router";
import cors from "cors";

app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET, POST, DELETE',
}));
app.use(express.json());
app.use(router);

app.listen(PORT, function () {
  console.log("MyBatch server listening on port " + PORT);
});
