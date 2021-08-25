import Product from "../Entities/ProductModel";
import express, { Router } from "express";
import auth from "../core/middleware";
import Joi from "joi";

const addProductValidation = (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  const schema = Joi.object({
    name: Joi.string().required().min(3),
    price: Joi.number().min(1),
    quantity: Joi.number().min(1),
  });
  const { error, value } = schema.validate(req.body, {
    abortEarly: false,
  });
  console.log(error?.message);
  
  if (error) {
    const msg = error.details.map((e) => {
      return e.message;
    });
    return res.status(400).send(msg);
  }
  next()
};

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
  addProductValidation,
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
