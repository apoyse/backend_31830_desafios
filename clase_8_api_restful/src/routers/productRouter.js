import { Router } from "express";

import { ContainerMemoria } from "../Api/MemoryContainer.js"; // type module

// const Container = require('../Api/Container.js')  // common js

// Container.ContainerMemoria  // common js

const productRouter = Router();
const ProductApi = new ContainerMemoria();

// /api/productos/
productRouter.get("/", (req, res) => {
  const productos = ProductApi.getAll();

  res.json(productos);
});

productRouter.get("/:id", (req, res) => {
  const { id } = req.params;

  const producto = ProductApi.getById(id);

  if (!producto) res.json({ error: "Producto no encontrado" });

  res.json(producto);
});

productRouter.post("/", (req, res) => {
  const { title, price, thumbnail } = req.body;

  const product = { title, price, thumbnail };

  const response = ProductApi.save(product);

  res.json(response);
});

productRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, price, thumbnail } = req.body;

  const updatedProduct = ProductApi.updateById(id, { title, price, thumbnail });

  if (updatedProduct.error) res.json({ error: "Producto no encontrado" });

  res.json(updatedProduct);
});

productRouter.delete("/:id", (req, res) => {
  const { id } = req.params;

  const response = ProductApi.deleteById(id);

  if (response.error) return res.json({ error: "Producto no encontrado" });

  res.json({ success: "Producto eliminado correctamente" });
});

export { productRouter };
