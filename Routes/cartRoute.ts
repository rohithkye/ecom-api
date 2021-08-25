import express, { Router } from "express";
import Cart from "../Entities/cartModel";

//TODO: Add validation and authorization
const cartRouter = Router();

cartRouter.get("/", async (req: express.Request, res: express.Response) => {
  try {
    const cart = await Cart.find();
    return res.send(cart);
  } catch (error) {
    return res.status(400).send(error);
  }
});
cartRouter.get("/:id", async (req: express.Request, res: express.Response) => {
  try {
    const cart = await Cart.findById(req.params.id);
    return res.send(cart);
  } catch (error) {
    return res.status(400).send(error);
  }
});
cartRouter.get(
  "/user/:uid",
  async (req: express.Request, res: express.Response) => {
    const cart = await Cart.find();
  }
);
cartRouter.post(
  "/user/:uid",
  async (req: express.Request, res: express.Response) => {
    const item = new Cart({
      uid: req.params.uid,
      pid: req.body.pid,
      quantity: req.body.quantity,
    });
    try {
      const savedItem = await item.save();
      return res.status(201).send({ cid: item._id });
    } catch (error) {
      return res.status(400).send(error);
    }
  }
);
cartRouter.put(
  "/user/:uid",
  async (req: express.Request, res: express.Response) => {
    const item = {
      uid: req.params.uid,
      pid: req.body.pid,
      quantity: req.body.quantity,
    };
    try {
      const savedItem = await Cart.updateOne(
        { uid: req.params.uid, pid: req.body.pid },
        { quantity: req.body.quantity }
      );
      return res.status(201).send();
    } catch (error) {
      return res.status(400).send(error);
    }
  }
);
cartRouter.delete(
  "/user/:uid",
  async (req: express.Request, res: express.Response) => {
    try {
      const deletedItem = await Cart.findOneAndDelete({
        uid: req.params.uid,
        pid: req.body.pid,
      });
      return res.send(deletedItem);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
);

export default cartRouter;
