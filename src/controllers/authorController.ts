import { Author } from "../models/author";
import asyncHandler from "express-async-handler";
import { Response, Request, NextFunction } from "express";

// Displays list of all Authors.
const author_list = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const allAuthors = await Author.find()
      .sort({ family_name: 1 })
      .exec();
    res.render("author_list", {
      title: "Author List",
      author_list: allAuthors,
    });
  }
);

// Displays detail page for a specific Author.
const author_detail = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
  }
);

// Displays Author create form on GET.
const author_create_get = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Author create GET");
  }
);

// Handles Author create on POST.
const author_create_post = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Author create POST");
  }
);

// Displays Author delete form on GET.
const author_delete_get = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Author delete GET");
  }
);

// Handles Author delete on POST.
const author_delete_post = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Author delete POST");
  }
);

// Displays Author update form on GET.
const author_update_get = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Author update GET");
  }
);

// Handles Author update on POST.
const author_update_post = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Author update POST");
  }
);

export default {
  author_list,
  author_detail,
  author_create_get,
  author_delete_get,
  author_update_get,
  author_create_post,
  author_update_post,
  author_delete_post,
};
