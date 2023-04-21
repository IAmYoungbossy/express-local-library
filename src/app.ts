import path from "path";
import logger from "morgan";
import express from "express";
import createError from "http-errors";
import cookieParser from "cookie-parser";

import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
import catalogRouter from "./routes/catalog";
import errorHandler from "./controllers/errorController";

const app = express();

// view engine setup
app.set("views", path.resolve("src", "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve("src", "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)));

// error handler
app.use(errorHandler);

export default app;
