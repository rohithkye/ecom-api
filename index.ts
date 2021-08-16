import connect from "./config/dbConfig";
import express from "express";
import userRouter from "./Routes/userRoutes";
import logInRouter from "./Routes/logInRoutes";
import productRouter from "./Routes/productRoute";
const app = express();

connect();

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use("/user", userRouter);
app.use("/login", logInRouter);
app.use("/product", productRouter);

const server = app.listen(PORT, () => {
  console.log(`Up and Running, on PORT:${PORT}`);
});
//clean up
process.on("uncaughtException", () => {
  server.close();
});
process.on("SIGILL", () => {
  server.close();
});
