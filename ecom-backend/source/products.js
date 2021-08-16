import express from "express";
import Joi from "joi";

const route = express.Router();
//  '/product/'
const products = [];
route.get("/", (req, res) => {
  res.status(200).send(products);
});
route.get("/:id", (req, res) => {
  const id = req.params.id;
  // validation
  const number = /[0-9]/;
  if (!number.exec(id)) return res.status(400).send({ error: "enter number" });
  const p = products.find((item) => item.id == id);
  if (p == null) return res.send({ error: "not found" });
  return res.send(p);
});
route.post("/", (req, res) => {
  const validationSchema = Joi.object({
    name: Joi.string().required().min(3),
    price: Joi.number().required(),
  });
  const { error, value } = validationSchema.validate(req.body,{ abortEarly: false });
  if (error) {
    console.log(error);
    
    return res.send({error:error.message});
  }
  const product = { id: 10, name: value.name, price: value.price };
  products.push(product);
  res.send(product);
});
export default route;
