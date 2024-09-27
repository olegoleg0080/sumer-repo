import express from "express";
import cors from "cors";
import postRouter from "./routes/post-router.js";
import authRouter from "./routes/auth-router.js";

const app = express();

app.use(cors());

app.use((req, res, next) => {
  console.log("middleware");

  next();
});

app.use(express.json());

app.use("/post", postRouter)
app.use("/auth", authRouter)
app.use(express.static("public"))
app.get("/", (req, res) => {
  res.json("Hello World");
});

app.use((err, req, res, next) => {
    console.log("err", err);
    res.status(err.status).json({message: err.message})
})


export default app