import { Router } from "express";
import * as controllers from "../controllers/authors.js";

const router = Router();

router.get("/", controllers.getauthors);
router.get("/:id", controllers.getauthors);
router.post("/", controllers.createauthors);
router.put("/:id", controllers.updateauthors);
router.delete("/:id", controllers.deleteauthors);

export default router;