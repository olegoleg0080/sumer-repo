import express from "express";
import authControllers from "../controllers/auth-controllers.js";
import autorization from "../meddelwares/autorization.js";



const authRouter = express.Router();
authRouter.post("/signup", authControllers.signup);

authRouter.post("/signin", authControllers.signin)
authRouter.get("/current",autorization, authControllers.getInfo)

authRouter.post("/lodout",autorization, authControllers.logout)


export default authRouter;
