require("dotenv").config();
import express from "express";
import cors from "cors";
import "./database/connection";
import routes from "./routes";
import { sendEmail } from "./utils/sendEmail";

const server = express();
server.use(cors());
server.set("port", process.env.PORT || 5000);
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(routes);

server.post("/send-email", async (request, response) => {
  const { emailTo, name } = request.body;

  const send = sendEmail(emailTo, name);
  if (send) {
    return response.status(200).json("o email foi enviado");
  } else {
    return response.status(400).json("Deu errado");
  }

  //ES6
});

server.listen(server.get("port"), function () {
  console.log("Node server is running at localhost:" + server.get("port"));
});
