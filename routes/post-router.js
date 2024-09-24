import express from "express";
import postControllers from "../controllers/post-controllers.js";
import {validateBody} from "../decorators/index.js";
import { addPostschema, editPostschema } from "../schema/post-schema.js";
import { isValidId} from "../meddelwares/index.js";



const postRouter = express.Router();

postRouter.get("/", postControllers.getPosts);

postRouter.get("/:id",isValidId, postControllers.getPostById);

postRouter.post("/", validateBody(addPostschema) , postControllers.createPost);

postRouter.put("/:id",isValidId, validateBody(editPostschema), postControllers.redactPost);

postRouter.delete("/:id",isValidId, postControllers.deletePost);

export default postRouter;
