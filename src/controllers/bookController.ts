import { Book } from "../models/book";
import { Genre } from "../models/genre";
import { Author } from "../models/author";
import { CustomErr } from "./genreController";
import { BookInstance } from "../models/bookInstance";

import asyncHandler from "express-async-handler";
import { Response, Request, NextFunction } from "express";
import { body, validationResult } from "express-validator";

const index = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // Get details of books, book instances, authors and genre counts (in parallel)
    const [
      numBooks,
      numGenres,
      numAuthors,
      numBookInstances,
      numAvailableBookInstances,
    ] = await Promise.all([
      Book.countDocuments({}).exec(),
      Genre.countDocuments({}).exec(),
      Author.countDocuments({}).exec(),
      BookInstance.countDocuments({}).exec(),
      BookInstance.countDocuments({
        status: "Available",
      }).exec(),
    ]);

    res.render("index", {
      book_count: numBooks,
      genre_count: numGenres,
      author_count: numAuthors,
      title: "Local Library Home",
      book_instance_count: numBookInstances,
      book_instance_available_count: numAvailableBookInstances,
    });
  }
);

// Displays list of all books.
const book_list = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const allBooks = await Book.find({}, "title author")
      .sort({ title: 1 })
      .populate("author")
      .exec();

    res.render("book_list", {
      title: "Book List",
      book_list: allBooks,
    });
  }
);

// Displays detail page for a specific book.
const book_detail = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // Get details of books, book instances for specific book
    const [book, bookInstances] = await Promise.all([
      Book.findById(req.params.id)
        .populate("author")
        .populate("genre")
        .exec(),
      BookInstance.find({ book: req.params.id }).exec(),
    ]);

    if (book === null) {
      // No results.
      const err = new Error("Book not found") as CustomErr;
      err.status = 404;
      return next(err);
    }

    res.render("book_detail", {
      title: book.title,
      book: book,
      book_instances: bookInstances,
    });
  }
);

// Displays book create form on GET.
const book_create_get = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // Get all authors and genres, which we can use for adding to our book.
    const list = [Author.find().exec(), Genre.find().exec()];
    const [allAuthors, allGenres] = await Promise.all(list);

    const genres = allGenres;
    const authors = allAuthors;
    const title = "Create Book";

    res.render("book_form", { title, authors, genres });
  }
);

// Handles book create on POST.
const book_create_post = [
  // Convert the genre to an array.
  (req: Request, res: Response, next: NextFunction) => {
    if (!(req.body.genre instanceof Array)) {
      if (typeof req.body.genre === "undefined")
        req.body.genre = [];
      else req.body.genre = new Array(req.body.genre);
    }
    next();
  },

  // Validate and sanitize fields.
  body("title", "Title must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("author", "Author must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("summary", "Summary must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("isbn", "ISBN must not be empty")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("genre.*").escape(),

  // Process request after validation and sanitization.
  asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);
    const { isbn, title, genre, author, summary } = req.body;

    // Create a Book object with escaped and trimmed data.
    const book = new Book({
      isbn,
      title,
      genre,
      author,
      summary,
    });

    /****************************************************
     ** If errors. Render the form again with sanitized *
     ** values/error messages. **************************/
    if (!errors.isEmpty()) {
      // Get all authors and genres for form.
      const [allAuthors, allGenres] = await Promise.all([
        Author.find().exec(),
        Genre.find().exec(),
      ]);

      // Mark our selected genres as checked.
      for (let genre of allGenres) {
        if (book.genre.indexOf(genre._id) > -1) {
          genre.checked = "true";
        }
      }
      res.render("book_form", {
        book: book,
        genres: allGenres,
        authors: allAuthors,
        title: "Create Book",
        errors: errors.array(),
      });
    } else {
      // Data from form is valid. Save book.
      await book.save();
      res.redirect(book.url);
    }
  }),
];

// Displays book delete form on GET.
const book_delete_get = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Book delete GET");
  }
);

// Handles book delete on POST.
const book_delete_post = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Book delete POST");
  }
);

// Displays book update form on GET.
const book_update_get = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // Get book, authors and genres for form.
    const [book, allAuthors, allGenres] = await Promise.all([
      Book.findById(req.params.id)
        .populate("author")
        .populate("genre")
        .exec(),
      Author.find().exec(),
      Genre.find().exec(),
    ]);

    // No results.
    if (book === null) {
      const err = new Error("Book not found") as CustomErr;
      err.status = 404;
      return next(err);
    }

    // Mark our selected genres as checked.
    for (const genre of allGenres) {
      for (const book_g of book.genre) {
        if (genre._id.toString() === book_g._id.toString()) {
          genre.checked = "true";
        }
      }
    }

    res.render("book_form", {
      title: "Update Book",
      authors: allAuthors,
      genres: allGenres,
      book: book,
    });
  }
);

// Handles book update on POST.
const book_update_post = [
  // Convert the genre to an array.
  (req: Request, res: Response, next: NextFunction) => {
    if (!(req.body.genre instanceof Array)) {
      if (typeof req.body.genre === "undefined")
        req.body.genre = [];
      else req.body.genre = new Array(req.body.genre);
    }
    next();
  },

  // Validate and sanitize fields.
  body("title", "Title must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("author", "Author must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("summary", "Summary must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("isbn", "ISBN must not be empty")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("genre.*").escape(),

  // Process request after validation and sanitization.
  asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a Book object with escaped/trimmed data and old id.
    const book = new Book({
      _id: req.params
        .id /** This is required, or a new ID will be assigned! */,
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      summary: req.body.summary,
      genre:
        typeof req.body.genre === "undefined"
          ? []
          : req.body.genre,
    });

    /****************************************************
     ** If errors. Render the form again with sanitized *
     ** values/error messages. **************************/
    if (!errors.isEmpty()) {
      // Get all authors and genres for form
      const [allAuthors, allGenres] = await Promise.all([
        Author.find().exec(),
        Genre.find().exec(),
      ]);

      // Mark our selected genres as checked.
      for (const genre of allGenres) {
        if (book.genre.indexOf(genre._id) > -1)
          genre.checked = "true";
      }
      res.render("book_form", {
        book: book,
        genres: allGenres,
        authors: allAuthors,
        title: "Update Book",
        errors: errors.array(),
      });
      return;
    } else {
      // Data from form is valid. Update the record.
      const thebook = await Book.findByIdAndUpdate(
        req.params.id,
        book,
        {}
      );
      // Redirect to book detail page.
      if (thebook) res.redirect(thebook.url);
    }
  }),
];

export default {
  index,
  book_list,
  book_detail,
  book_create_get,
  book_delete_get,
  book_update_get,
  book_create_post,
  book_update_post,
  book_delete_post,
};
