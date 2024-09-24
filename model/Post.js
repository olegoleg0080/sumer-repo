import { model, Schema } from "mongoose";
import { handleSaveError, preUpdate } from "./hooks.js";

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            minLength: 1,
        },
        body: {
            type: String,
            required: true,
            minLength: 1,
        },
        // email: {
        //     type: String,
        //     metch: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        // },
        typePost: {
            type: String,
            enum: ["easy", "medium", "hard"],
        },
        status: {
            type: String,
            enum: [true, false],
        },
    },
    { versionKey: false, timestamps: true }
);
postSchema.post("save", handleSaveError);
postSchema.pre("findOneAndUpdate", preUpdate);
postSchema.post("findOneAndUpdate", handleSaveError);

export const Post = model("post", postSchema);
