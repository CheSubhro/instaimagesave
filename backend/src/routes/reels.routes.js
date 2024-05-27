

import { Router } from "express";
import { downloadReelsVideo } from "../controllers/reels.controller.js";


const router = Router()

router.route("/download").post(downloadReelsVideo)

export default router