import express from "express";
import {
  CreateRoomController,
  DeleteRoomController,
  GetAllRoomsController,
  GetRoomController,
  UpdateRoomController,
} from "../controllers/RoomControllers.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// CREATE RoomS
router.post("/:hotelid", verifyAdmin, CreateRoomController);
// UPDATE RoomS INFO
router.put("/:id", verifyAdmin, UpdateRoomController);
// DELETE RoomS
router.delete("/:id/:hotelid", verifyAdmin, DeleteRoomController);
// DELETE ALL RoomS
// router.delete("/:hotelid", verifyAdmin, DeleteAllRoomsController);
// GET SPECIFIC RoomS
router.get("/:id", GetRoomController);
// GET ALL RoomS
router.get("/", GetAllRoomsController);

export default router;
