import { Router } from "express";
import { authenticaterouter } from "./authenticate.routes";

import { categoriesRouter, categoriesRouterDel } from "./categories.routes";
import { usersRouter } from "./users.routes";
import { videosRouter } from "./videos.routes";

const router = Router()

router.use("/categories", categoriesRouter);
router.use("/categories", categoriesRouterDel )

router.use("/videos", videosRouter)
router.use("/users", usersRouter)
router.use(authenticaterouter)


export { router }