import express, { Response, Request } from "express";
const indexRouter = express.Router();

/* GET home page. */
indexRouter.get("/", function (req: Request, res: Response) {
  res.redirect("/catalog");
});

export default indexRouter;
