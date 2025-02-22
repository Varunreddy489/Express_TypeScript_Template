import { Request, Response } from "express";

export const info = (req: Request, res: Response) => {
  res.json({
    success: true,
  });
};
