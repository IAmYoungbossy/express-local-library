import { Book } from "../models/book";
import { CustomErr } from "./genreController";
import { BookInstance } from "../models/bookInstance";

import asyncHandler from "express-async-handler";
import { Response, Request, NextFunction } from "express";
import { body, validationResult } from "express-validator";

// Displays list of all BookInstances.
const bookinstance_list = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const allBookInstances = await BookInstance.find()
      .populate("book")
      .exec();

    res.render("bookinstance_list", {
      title: "Book Instance List",
      bookinstance_list: allBookInstances,
    });
  }
);

// Displays detail page for a specific BookInstance.
const bookinstance_detail = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const bookInstance = await BookInstance.findById(
      req.params.id
    )
      .populate("book")
      .exec();

    if (bookInstance === null) {
      // No results.
      const err = new Error("Book copy not found") as CustomErr;
      err.status = 404;
      return next(err);
    }

    res.render("bookinstance_detail", {
      title: "Book:",
      bookinstance: bookInstance,
    });
  }
);

// Displays BookInstance create form on GET.
const bookinstance_create_get = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const allBooks = await Book.find({}, "title").exec();
    const title = "Create BookInstance";
    const book_list = allBooks;

    res.render("bookinstance_form", { title, book_list });
  }
);

// Handles BookInstance create on POST.
const bookinstance_create_post = [
  // Validate and sanitize fields.
  body("book", "Book must be specified")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("imprint", "Imprint must be specified")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("status").escape(),
  body("due_back", "Invalid date")
    .optional({ checkFalsy: true })
    .isISO8601()
    .toDate(),

  // Process request after validation and sanitization.
  asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a BookInstance object with escaped and trimmed data.
    const bookInstance = new BookInstance({
      book: req.body.book,
      imprint: req.body.imprint,
      status: req.body.status,
      due_back: req.body.due_back,
    });

    /****************************************************
     ** If errors. Render the form again with sanitized *
     ** values/error messages. **************************/
    if (!errors.isEmpty()) {
      const allBooks = await Book.find({}, "title").exec();

      res.render("bookinstance_form", {
        book_list: allBooks,
        errors: errors.array(),
        bookinstance: bookInstance,
        title: "Create BookInstance",
        selected_book: bookInstance.book._id,
      });
      return;
    } else {
      // Data from form is valid
      await bookInstance.save();
      res.redirect(bookInstance.url);
    }
  }),
];

// Displays BookInstance delete form on GET.
const bookinstance_delete_get = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: BookInstance delete GET");
  }
);

// Handles BookInstance delete on POST.
const bookinstance_delete_post = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: BookInstance delete POST");
  }
);

// Displays BookInstance update form on GET.
const bookinstance_update_get = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: BookInstance update GET");
  }
);

// Handles bookinstance update on POST.
const bookinstance_update_post = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: BookInstance update POST");
  }
);

export default {
  bookinstance_list,
  bookinstance_detail,
  bookinstance_create_get,
  bookinstance_update_get,
  bookinstance_delete_get,
  bookinstance_create_post,
  bookinstance_update_post,
  bookinstance_delete_post,
};
