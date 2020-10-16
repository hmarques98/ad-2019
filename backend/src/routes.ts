import { Router } from "express";
import secretUser from "./controllers/secretUser";

const routes = Router();

routes.get("/users", secretUser.show);

routes.post("/register", secretUser.create);

routes.patch("/update/", secretUser.update);

routes.delete("/user/:emailUser", secretUser.delete);

export default routes;
