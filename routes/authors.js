import { Router } from "express";
import * as controllers from "../controllers/authors.js";

const router = Router();

router.get("/", controllers.getauthors);
router.get("/:id", controllers.getauthor);
router.post("/", controllers.createauthor);
router.put("/:id", controllers.updateauthor);
router.delete("/:id", controllers.deleteauthor);

export default router;