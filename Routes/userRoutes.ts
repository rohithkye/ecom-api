import { Router } from "express";
import User from "../Entities/UserModel";
import bcrypt from "bcrypt";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send("fetched");
});

userRouter.put("/", (req, res) => {
  res.send("updated");
});

userRouter.post("/", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPswd = await bcrypt.hash(req.body.password, salt);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPswd,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

userRouter.delete("/", (req, res) => {
  res.send("deleted");
});

export default userRouter;
