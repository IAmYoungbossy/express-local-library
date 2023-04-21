import { Book } from "../models/book";
import asyncHandler from "express-async-handler";
import { Response, Request, NextFunction } from "express";

export const index = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Site Home Page");
  }
);

// Displays list of all books.
export const book_list = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Book list");
  }
);

// Displays detail page for a specific book.
export const book_detail = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(`NOT IMPLEMENTED: Book detail: ${req.params.id}`);
  }
);

// Displays book create form on GET.
export const book_create_get = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Book create GET");
  }
);

// Handles book create on POST.
export const book_create_post = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Book create POST");
  }
);

// Displays book delete form on GET.
export const book_delete_get = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Book delete GET");
  }
);

// Handles book delete on POST.
export const book_delete_post = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Book delete POST");
  }
);

// Displays book update form on GET.
export const book_update_get = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Book update GET");
  }
);

// Handles book update on POST.
export const book_update_post = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Book update POST");
  }
);
