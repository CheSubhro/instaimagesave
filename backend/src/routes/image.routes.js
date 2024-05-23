

import { Router } from "express";
import { getImageUrl } from "../controllers/image.controller.js";


const router = Router()

router.route("/download").post(getImageUrl)

export default router
