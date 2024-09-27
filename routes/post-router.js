import express from "express";
import postControllers from "../controllers/post-controllers.js";
import {validateBody} from "../decorators/index.js";
import { addPostschema, editPostschema } from "../schema/post-schema.js";
import { autorization, isValidId, upload} from "../meddelwares/index.js";



const postRouter = express.Router();
// postRouter.use(autorization)
postRouter.get("/", autorization, postControllers.getPosts);

postRouter.get("/:id",autorization, isValidId, postControllers.getPostById);

postRouter.post("/",upload.single("postAvatar") ,autorization,  validateBody(addPostschema) , postControllers.createPost);

postRouter.put("/:id",autorization, isValidId, validateBody(editPostschema), postControllers.redactPost);

postRouter.delete("/:id",autorization, isValidId, postControllers.deletePost);

export default postRouter;
