import { Book } from "../models/book";
import { Author } from "../models/author";
import { CustomErr } from "./genreController";

import asyncHandler from "express-async-handler";
import { Response, Request, NextFunction } from "express";
import { body, validationResult } from "express-validator";

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
    // Get details of author and all their books (in parallel)
    const [author, allBooksByAuthor] = await Promise.all([
      Author.findById(req.params.id).exec(),
      Book.find(
        { author: req.params.id },
        "title summary"
      ).exec(),
    ]);

    if (author === null) {
      // No results.
      const err = new Error("Author not found") as CustomErr;
      err.status = 404;
      return next(err);
    }

    res.render("author_detail", {
      title: "Author Detail",
      author: author,
      author_books: allBooksByAuthor,
    });
  }
);

// Displays Author create form on GET.
const author_create_get = (
  req: Request,
  res: Response,
  next: NextFunction
) => res.render("author_form", { title: "Create Author" });

// Handles Author create on POST.
const author_create_post = [
  // Validate and sanitize fields.
  body("first_name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("First name must be specified.")
    .isAlphanumeric()
    .withMessage("First name has non-alphanumeric characters."),
  body("family_name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Family name must be specified.")
    .isAlphanumeric()
    .withMessage("Family name has non-alphanumeric characters."),
  body("date_of_birth", "Invalid date of birth")
    .optional({ checkFalsy: true })
    .isISO8601()
    .toDate(),
  body("date_of_death", "Invalid date of death")
    .optional({ checkFalsy: true })
    .isISO8601()
    .toDate(),

  // Process request after validation and sanitization.
  asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const err = validationResult(req);
    const errors = err.array();

    const title = "Create Author";

    // Create Author object with escaped and trimmed data
    const author = new Author({
      first_name: req.body.first_name,
      family_name: req.body.family_name,
      date_of_birth: req.body.date_of_birth,
      date_of_death: req.body.date_of_death,
    });

    /****************************************************
     ** If errors. Render the form again with sanitized *
     ** values/error messages. **************************/
    if (!err.isEmpty()) {
      res.render("author_form", { author, title, errors });
      return;
    } else {
      // Save author.
      await author.save();
      // Redirect to new author record.
      res.redirect(author.url);
    }
  }),
];

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
