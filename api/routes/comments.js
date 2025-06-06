import express from "express";
import { getComments, addComment, deleteComment } from "../controllers/comment.js";


const router = express.Router()

router.get("/", getComments)
router.post("/", addComment)
router.delete("/:commentId", deleteComment);

export default router