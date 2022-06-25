import express from "express";
import { productRouter } from "./routers/productRouter.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api/productos", productRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
