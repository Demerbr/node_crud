import { Router } from "express";

import { categoriesRouter, categoriesRouterDel } from "./categories.routes";

const router = Router()

router.use("/categories", categoriesRouter);
router.use("/categories/:id", categoriesRouterDel )


export { router }