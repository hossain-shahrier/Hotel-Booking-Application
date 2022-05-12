import express from "express";
// All controllers
import {
  countByCity,
  countByType,
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
router.put("/find/:id", verifyAdmin, UpdateHotelController);
// DELETE HOTEL
router.delete("/find/:id", verifyAdmin, DeleteHotelController);
// DELETE ALL HOTELS
router.delete("/", verifyAdmin, DeleteAllHotelsController);
// GET SPECIFIC HOTELS
router.get("/find/:id", GetHotelController);
// GET ALL HOTELS
router.get("/", GetAllHotelsController);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;
