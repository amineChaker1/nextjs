import express from "express";
import {
  addMember,
  getAllMembers,
  getSingleMember,
} from "../controllers/members.js";

const router = express.Router();

router.get("/", getAllMembers);
router.post("/", addMember);
router.get("/:id", getSingleMember);

export default router;
