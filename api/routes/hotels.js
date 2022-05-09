import express from "express";
// All controllers
import {
  CreateHotelController,
  DeleteAllHotelsController,
  DeleteHotelController,
  GetAllHotelsController,
  GetHotelController,
  UpdateHotelController,
} from "../controllers/HotelControllers.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// CREATE HOTELS
router.post("/", verifyAdmin, CreateHotelController);
// UPDATE HOTELS INFO
router.put("/:id", verifyAdmin, UpdateHotelController);
// DELETE HOTELS
router.delete("/:id", verifyAdmin, DeleteHotelController);
// DELETE ALL HOTELS
router.delete("/", verifyAdmin, DeleteAllHotelsController);
// GET SPECIFIC HOTELS
router.get("/:id", GetHotelController);
// GET ALL HOTELS
router.get("/", GetAllHotelsController);

export default router;
