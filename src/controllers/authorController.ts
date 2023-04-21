import { Author } from "../models/author";
import asyncHandler from "express-async-handler";
import { Response, Request, NextFunction } from "express";

// Displays list of all Authors.
export const author_list = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Author list");
  }
);

// Displays detail page for a specific Author.
export const author_details = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
  }
);

// Displays Author create form on GET.
export const author_create_get = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Author create GET");
  }
);

// Handles Author create on POST.
export const author_create_post = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Author create POST");
  }
);

// Displays Author delete form on GET.
export const author_delete_get = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Author delete GET");
  }
);

// Handles Author delete on POST.
export const author_delete_post = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Author delete POST");
  }
);

// Displays Author update form on GET.
export const author_update_get = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Author update GET");
  }
);

// Handles Author update on POST.
export const author_update_post = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Author update POST");
  }
);
