const express = require("express");
const router = express.Router();

// Controller
const { 
  insertItemPedido, 
  getAllItensPedido,
  deleteItemPedido,
  getItemPedidoById,
  updateItemPedido
} = require("../controllers/ItemPedidoController");

// Middlewares
const { insertItemPedidoValidation, updateItemPedidoValidation } = require("../middlewares/itempedidoValidation");
const validate = require("../middlewares/handleValidation");

// Routes 
router.post("/insert", insertItemPedidoValidation(), validate, insertItemPedido);
router.delete("/delete", deleteItemPedido);
router.get("/getall", getAllItensPedido);
router.get("/get", getItemPedidoById);
router.put("/update", updateItemPedidoValidation(), validate, updateItemPedido);

module.exports = router;
