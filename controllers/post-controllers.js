import ctrlWrapper from "../decorators/ctrlWrapper.js";
import {
    createPost,
    deletePost,
    getPostById,
    getPosts,
    redactPost,
} from "./posts/index.js";

export default {
    getPosts: ctrlWrapper(getPosts),
    getPostById: ctrlWrapper(getPostById),
    createPost: ctrlWrapper(createPost),
    redactPost: ctrlWrapper(redactPost),
    deletePost: ctrlWrapper(deletePost),
};
