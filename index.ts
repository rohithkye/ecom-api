import connect from "./config/dbConfig";
import express from "express";
import userRouter from "./Routes/userRoutes";
import logInRouter from "./Routes/logInRoutes";
import productRouter from "./Routes/productRoute";
import dotenv from 'dotenv';
import cartRouter from "./Routes/cartRoute";

dotenv.config();
const app = express();

// connect to db
connect();

const PORT = process.env.PORT || 3000;
//Middleware to parse as Json
app.use(express.json());

//Routing
app.use("/user", userRouter);
app.use("/login", logInRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);

//Start server
const server = app.listen(PORT, () => {
  console.log(`Up and Running, on ${server.address()}:${PORT}`);
});
//clean up
process.on("uncaughtException", () => {
  server.close();
});
process.on("SIGILL", () => {
  server.close();
});
