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
router.delete("/delete/:id_item", deleteItemPedido);
router.get("/get", getAllItensPedido);
router.get("/get/:id_item", getItemPedidoById);
router.put("/update/:id_item", updateItemPedidoValidation(), validate, updateItemPedido);

module.exports = router;
