import express from "express";
import {
  UpdateUserController,
  DeleteUserController,
  DeleteAllUsersController,
  GetUserController,
  GetAllUsersController,
} from "../controllers/UserController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("you are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("you are logged in as User and you can delete your account");
// });
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hi Admin, you are logged in!");
// });
// UPDATE UserS INFO
router.put("/:id", verifyUser, UpdateUserController);
// DELETE UserS
router.delete("/:id", verifyUser, DeleteUserController);
// DELETE ALL UserS
router.delete("/", verifyAdmin, DeleteAllUsersController);
// GET SPECIFIC UserS
router.get("/:id", verifyUser, GetUserController);
// GET ALL UserS
router.get("/", verifyAdmin, GetAllUsersController);
export default router;
