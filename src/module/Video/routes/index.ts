import { Router } from "express";

import { categoriesRouter, categoriesRouterDel } from "./categories.routes";
import { videosRouter } from "./videos.routes";

const router = Router()

router.use("/categories", categoriesRouter);
router.use("/categories", categoriesRouterDel )

router.use("/videos", videosRouter)


export { router }