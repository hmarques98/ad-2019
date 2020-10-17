require("dotenv").config();
import express from "express";
import cors from "cors";
import "./database/connection";
import routes from "./routes";
import { sendEmail } from "./utils/sendEmail";
import User from "./models/User";

const server = express();
server.use(cors());
server.set("port", process.env.PORT || 5000);
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use(routes);
server.listen(server.get("port"), function () {
  console.log("Node server is running at localhost:" + server.get("port"));
});
