import { Book } from "../models/book";
import asyncHandler from "express-async-handler";
import { Response, Request, NextFunction } from "express";

const index = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Site Home Page");
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
