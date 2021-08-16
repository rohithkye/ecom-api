import Product from "../Entities/ProductModel";
import express, { Router } from "express";
import auth from "../core/middleware";

const productRouter = Router();

productRouter.get("/", async (req: express.Request, res: express.Response) => {
  try {
    const products = await Product.find();
    return res.send(products);
  } catch (error) {
    return res.status(400).send(error);
  }
});
productRouter.get(
  "/:id",
  async (req: express.Request, res: express.Response) => {
    try {
      const product = await Product.findById(req.params.id);
      return res.send(product);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
);
productRouter.post(
  "/",
  auth,
  async (req: express.Request, res: express.Response) => {
    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      quantity: req.body.quantity,
    });
    try {
      const savedProduct = await product.save();
      return res.status(201).send({ pid: product._id });
    } catch (error) {
      return res.status(400).send(error);
    }
  }
);
productRouter.put("/", (req: express.Request, res: express.Response) => {
  res.send("product put");
});
productRouter.delete("/", (req: express.Request, res: express.Response) => {
  res.send("product delete");
});

export default productRouter;
