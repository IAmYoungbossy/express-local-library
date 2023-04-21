import asyncHandler from "express-async-handler";
import { BookInstance } from "../models/bookInstance";
import { Response, Request, NextFunction } from "express";

// Displays list of all BookInstances.
export const bookinstance_list = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: BookInstance list");
  }
);

// Displays detail page for a specific BookInstance.
export const bookinstance_detail = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(
      `NOT IMPLEMENTED: BookInstance detail: ${req.params.id}`
    );
  }
);

// Displays BookInstance create form on GET.
export const bookinstance_create_get = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: BookInstance create GET");
  }
);

// Handles BookInstance create on POST.
export const bookinstance_create_post = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: BookInstance create POST");
  }
);

// Displays BookInstance delete form on GET.
export const bookinstance_delete_get = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: BookInstance delete GET");
  }
);

// Handles BookInstance delete on POST.
export const bookinstance_delete_post = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: BookInstance delete POST");
  }
);

// Displays BookInstance update form on GET.
export const bookinstance_update_get = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: BookInstance update GET");
  }
);

// Handles bookinstance update on POST.
export const bookinstance_update_post = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: BookInstance update POST");
  }
);
