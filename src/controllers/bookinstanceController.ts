import { CustomErr } from "./genreController";
import { BookInstance } from "../models/bookInstance";

import asyncHandler from "express-async-handler";
import { Response, Request, NextFunction } from "express";

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
    res.send("NOT IMPLEMENTED: BookInstance create GET");
  }
);

// Handles BookInstance create on POST.
const bookinstance_create_post = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("NOT IMPLEMENTED: BookInstance create POST");
  }
);

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
