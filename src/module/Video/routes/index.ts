import { Router } from "express";

import { categoriesRouter, categoriesRouterDel } from "./categories.routes";

const router = Router()

router.use("/categories", categoriesRouter);
router.use("/categories", categoriesRouterDel )


export { router }