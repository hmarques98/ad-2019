import { Router } from "express";
import secretUser from "./controllers/secretUser";

const routes = Router();

routes.get("/registers", secretUser.show);

routes.post("/create", secretUser.create);

routes.patch("/update/", secretUser.update);

routes.delete("/user/:emailUser", secretUser.delete);

export default routes;
