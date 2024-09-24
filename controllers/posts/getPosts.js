import { getAllPosts, HTTPError } from "../../helpers/index.js";
import { Post } from "../../model/Post.js";

const getPosts = async (_, res) => {
    // const posts = await getAllPosts()
    const posts = await Post.find()
    if (!posts) {
        throw HTTPError(404, "Not Faund")
    }
    res.json(posts);
}
export default getPosts