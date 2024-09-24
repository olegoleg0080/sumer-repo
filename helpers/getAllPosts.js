import path from "path";
import fs from "fs/promises";

const FILE_PATH = path.resolve("posts.json");

const getAllPosts = async () => {
    const res = await fs.readFile(FILE_PATH);
    return JSON.parse(res);
};

export default getAllPosts;
