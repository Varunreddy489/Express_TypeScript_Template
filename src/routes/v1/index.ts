import Router from "express";
import { info } from "../../controllers";

const router = Router();

router.get("/info",info);

export { router as v1Routes };
