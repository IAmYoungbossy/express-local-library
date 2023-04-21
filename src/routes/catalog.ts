import { Router } from "express";

import book_controller from "../controllers/bookController";
import genre_controller from "../controllers/genreController";
import author_controller from "../controllers/authorController";
import book_instance_controller from "../controllers/bookinstanceController";

const catalogRouter = Router();

/// BOOK ROUTES ///
// GET catalog home page.
catalogRouter.get("/", book_controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
catalogRouter.get(
  "/book/create",
  book_controller.book_create_get
);

// POST request for creating Book.
catalogRouter.post(
  "/book/create",
  book_controller.book_create_post
);

// GET request to delete Book.
catalogRouter.get(
  "/book/:id/delete",
  book_controller.book_delete_get
);

// POST request to delete Book.
catalogRouter.post(
  "/book/:id/delete",
  book_controller.book_delete_post
);

// GET request to update Book.
catalogRouter.get(
  "/book/:id/update",
  book_controller.book_update_get
);

// POST request to update Book.
catalogRouter.post(
  "/book/:id/update",
  book_controller.book_update_post
);

// GET request for one Book.
catalogRouter.get("/book/:id", book_controller.book_detail);

// GET request for list of all Book items.
catalogRouter.get("/books", book_controller.book_list);

/// AUTHOR ROUTES ///
// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
catalogRouter.get(
  "/author/create",
  author_controller.author_create_get
);

// POST request for creating Author.
catalogRouter.post(
  "/author/create",
  author_controller.author_create_post
);

// GET request to delete Author.
catalogRouter.get(
  "/author/:id/delete",
  author_controller.author_delete_get
);

// POST request to delete Author.
catalogRouter.post(
  "/author/:id/delete",
  author_controller.author_delete_post
);

// GET request to update Author.
catalogRouter.get(
  "/author/:id/update",
  author_controller.author_update_get
);

// POST request to update Author.
catalogRouter.post(
  "/author/:id/update",
  author_controller.author_update_post
);

// GET request for one Author.
catalogRouter.get(
  "/author/:id",
  author_controller.author_detail
);

// GET request for list of all Authors.
catalogRouter.get("/authors", author_controller.author_list);

/// GENRE ROUTES ///
// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
catalogRouter.get(
  "/genre/create",
  genre_controller.genre_create_get
);

//POST request for creating Genre.
catalogRouter.post(
  "/genre/create",
  genre_controller.genre_create_post
);

// GET request to delete Genre.
catalogRouter.get(
  "/genre/:id/delete",
  genre_controller.genre_delete_get
);

// POST request to delete Genre.
catalogRouter.post(
  "/genre/:id/delete",
  genre_controller.genre_delete_post
);

// GET request to update Genre.
catalogRouter.get(
  "/genre/:id/update",
  genre_controller.genre_update_get
);

// POST request to update Genre.
catalogRouter.post(
  "/genre/:id/update",
  genre_controller.genre_update_post
);

// GET request for one Genre.
catalogRouter.get("/genre/:id", genre_controller.genre_detail);

// GET request for list of all Genre.
catalogRouter.get("/genres", genre_controller.genre_list);

/// BOOKINSTANCE ROUTES ///
// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
catalogRouter.get(
  "/bookinstance/create",
  book_instance_controller.bookinstance_create_get
);

// POST request for creating BookInstance.
catalogRouter.post(
  "/bookinstance/create",
  book_instance_controller.bookinstance_create_post
);

// GET request to delete BookInstance.
catalogRouter.get(
  "/bookinstance/:id/delete",
  book_instance_controller.bookinstance_delete_get
);

// POST request to delete BookInstance.
catalogRouter.post(
  "/bookinstance/:id/delete",
  book_instance_controller.bookinstance_delete_post
);

// GET request to update BookInstance.
catalogRouter.get(
  "/bookinstance/:id/update",
  book_instance_controller.bookinstance_update_get
);

// POST request to update BookInstance.
catalogRouter.post(
  "/bookinstance/:id/update",
  book_instance_controller.bookinstance_update_post
);

// GET request for one BookInstance.
catalogRouter.get(
  "/bookinstance/:id",
  book_instance_controller.bookinstance_detail
);

// GET request for list of all BookInstance.
catalogRouter.get(
  "/bookinstances",
  book_instance_controller.bookinstance_list
);

export default catalogRouter;
