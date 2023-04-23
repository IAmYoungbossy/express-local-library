import path from "path";
import logger from "morgan";
import express from "express";
import cookieParser from "cookie-parser";

import errorHandler, {
  catchErrorAndForward,
} from "./controllers/errorController";
import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
import catalogRouter from "./routes/catalog";

const app = express();

// view engine setup
app.set("views", path.resolve("src", "views"));
app.set("view engine", "pug");

// Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve("src", "public")));

// Routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter);

// Forward error to err handler
app.use(catchErrorAndForward);

// error handler
app.use(errorHandler);

export default app;
