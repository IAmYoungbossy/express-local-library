import { Book } from "../models/book";
import { Genre } from "../models/genre";

import asyncHandler from "express-async-handler";
import { Response, Request, NextFunction } from "express";
import { body, validationResult } from "express-validator";

// Displays list of all Genre.
const genre_list = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const allGenre = await Genre.find().sort({ name: 1 }).exec();
    res.render("genre_list", {
      title: "Genre List",
      genre_list: allGenre,
    });
  }
);

export interface CustomErr extends Error {
  status: number;
}

// Displays detail page for a specific Genre.
const genre_detail = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // Get details of genre and all associated books (in parallel)
    const [genre, booksInGenre] = await Promise.all([
      Genre.findById(req.params.id).exec(),
      Book.find(
        { genre: req.params.id },
        "title summary"
      ).exec(),
    ]);
    if (genre === null) {
      // No results.
      const err = new Error("Genre not found") as CustomErr;
      err.status = 404;
      return next(err);
    }

    res.render("genre_detail", {
      title: "Genre Detail",
      genre: genre,
      genre_books: booksInGenre,
    });
  }
);

// Displays Genre create form on GET.
const genre_create_get = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.render("genre_form", { title: "Create Genre" });
};

// Handles Genre create on POST.
const genre_create_post = [
  // Validate and sanitize the name field.
  body("name", "Genre name must contain at least 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape(),

  // Process request after validation and sanitization.
  asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const err = validationResult(req);
    const errors = err.array();

    const { name } = req.body;
    const title = "Create Genre";

    // Create a genre object with escaped and trimmed data.
    const genre = new Genre({ name });

    /****************************************************
     ** If errors. Render the form again with sanitized *
     ** values/error messages. **************************/
    if (!err.isEmpty()) {
      res.render("genre_form", { genre, title, errors });
      return;
    } else {
      // Check if Genre with same name already exists.
      const genreExists = await Genre.findOne({ name }).exec();
      // Genre exists, redirect to its detail page.
      if (genreExists) res.redirect(genreExists.url);
      else {
        await genre.save();
        // New genre saved. Redirect to genre detail page.
        res.redirect(genre.url);
      }
    }
  }),
];

// Displays Genre delete form on GET.
const genre_delete_get = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Genre delete GET");
  }
);

// Handles Genre delete on POST.
const genre_delete_post = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Genre delete POST");
  }
);

// Displays Genre update form on GET.
const genre_update_get = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Genre update GET");
  }
);

// Handles Genre update on POST.
const genre_update_post = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Genre update POST");
  }
);

export default {
  genre_list,
  genre_detail,
  genre_create_get,
  genre_delete_get,
  genre_update_get,
  genre_create_post,
  genre_delete_post,
  genre_update_post,
};
