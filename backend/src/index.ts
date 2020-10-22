require("dotenv").config();
import express from "express";
import cors from "cors";
import "./database/connection";
import routes from "./routes";

const server = express();
server.set("port", process.env.PORT || 5000);
server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use(routes);
server.listen(server.get("port"), function () {
  console.log("Node server is running at localhost:" + server.get("port"));
});
