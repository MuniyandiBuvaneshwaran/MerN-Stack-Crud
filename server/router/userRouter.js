import express from "express";
import {
  addUser,
  deleteUser,
  getallUser,
  getsingleUser,
  updateUser,
} from "../controller/usercontroller.js";

const userRouter = express.Router();

userRouter.post(`/add`, addUser);
userRouter.get(`/all`, getallUser);
userRouter.get(`/:id`, getsingleUser);
userRouter.put(`/update/:id`, updateUser);
userRouter.delete(`/delete/:id`, deleteUser);

export default userRouter;