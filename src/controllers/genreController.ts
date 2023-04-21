import { Genre } from "../models/genre";
import asyncHandler from "express-async-handler";
import { Response, Request, NextFunction } from "express";

// Displays list of all Genre.
export const genre_list = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Genre list");
  }
);

// Displays detail page for a specific Genre.
export const genre_detail = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(`NOT IMPLEMENTED: Genre detail: ${req.params.id}`);
  }
);

// Displays Genre create form on GET.
export const genre_create_get = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Genre create GET");
  }
);

// Handles Genre create on POST.
export const genre_create_post = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Genre create POST");
  }
);

// Displays Genre delete form on GET.
export const genre_delete_get = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Genre delete GET");
  }
);

// Handles Genre delete on POST.
export const genre_delete_post = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Genre delete POST");
  }
);

// Displays Genre update form on GET.
export const genre_update_get = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Genre update GET");
  }
);

// Handles Genre update on POST.
export const genre_update_post = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: Genre update POST");
  }
);
