const express = require("express");
const router = express.Router();

// Controller
const { 
  insertComissao, 
  getAllComissaos,
  deleteComissao,
  getComissaoById,
  updateComissao,
  getComissaoVendedor
} = require("../controllers/ComissaoController");

// Middlewares
const { insertComissaoValidation, updateComissaoValidation } = require("../middlewares/comissaoValidation");
const validate = require("../middlewares/handleValidation");

// Routes 
router.post("/insert", insertComissaoValidation(), validate, insertComissao);
router.delete("/delete", deleteComissao);
router.get("/getall", getAllComissaos);
router.get("/getcomissaovendedor", getComissaoVendedor);
router.get("/get", getComissaoById);
router.put("/update", updateComissaoValidation(), validate, updateComissao);

module.exports = router;
