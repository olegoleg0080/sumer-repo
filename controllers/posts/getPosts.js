import { HTTPError } from "../../helpers/index.js";
import { Post } from "../../model/Post.js";

const getPosts = async (req, res) => {
    const {_id: owner} = req.user;
    console.log(req.query);
    const totalPost = await Post.countDocuments({owner});
    const {page, limit} = req.query
    const posts = await Post.find({owner},"", {skip: (page - 1) * limit, limit,})
    if (!posts) {
        throw HTTPError(404, "Not Faund")
    }
    res.json(posts);
}
export default getPosts