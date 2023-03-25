import { Response, Request } from "express";

export const notFoundMiddleWare = (req: Request, res: Response) => {
  return res.send("Route does not exist");
};
