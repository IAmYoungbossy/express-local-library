import express, { Response, Request } from "express";
const index = express.Router();

/* GET home page. */
index.get("/", function (req: Request, res: Response) {
  res.redirect("/catalog");
});

export default index;
