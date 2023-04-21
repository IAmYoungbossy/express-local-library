import asyncHandler from "express-async-handler";
import { body, validationResult } from "express-validator";
import { Response, Request, NextFunction } from "express";

import { Book } from "../models/book";
import { Genre } from "../models/genre";
import { Author } from "../models/author";
import { BookInstance } from "../models/bookInstance";

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
    res.send("NOT IMPLEMENTED: Book list");
  }
);

// Displays detail page for a specific book.
const book_detail = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(`NOT IMPLEMENTED: Book detail: ${req.params.id}`);
  }
);

// Displays book create form on GET.
const book_create_get = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Book create GET");
  }
);

// Handles book create on POST.
const book_create_post = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Book create POST");
  }
);

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
    res.send("NOT IMPLEMENTED: Book update GET");
  }
);

// Handles book update on POST.
const book_update_post = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Book update POST");
  }
);

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
