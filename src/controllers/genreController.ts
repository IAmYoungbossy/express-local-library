import { Book } from "../models/book";
import { Genre } from "../models/genre";
import asyncHandler from "express-async-handler";
import { Response, Request, NextFunction } from "express";

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

interface CustomErr extends Error {
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
const genre_create_get = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Genre create GET");
  }
);

// Handles Genre create on POST.
const genre_create_post = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Genre create POST");
  }
);

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
