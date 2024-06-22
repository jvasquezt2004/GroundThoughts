import { errorHandler } from "../utils/error.js";
import Comment from "../models/Comment.model.js";

export const createComment = async (req, res) => {
  try {
    const { content, postId, userId } = req.body;

    if (userId !== req.user.id) {
      return next(errorHandler("Unauthorized", 401));
    }

    const newComment = new Comment({
      content,
      postId,
      userId,
    });
    await newComment.save();

    res.status(201).json(newComment);
  } catch (error) {
    next(error);
  }
};
