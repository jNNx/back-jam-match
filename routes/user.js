import { Router } from "express";
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} from "../controllers/user.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.get("/:userId", getUserById);
userRoutes.post("/", createUser);
userRoutes.put("/:userId", updateUser);
userRoutes.delete("/:userId", deleteUser);

export default userRoutes;