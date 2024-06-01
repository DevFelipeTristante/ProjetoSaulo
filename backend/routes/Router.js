const express = require("express")
const router = express()

router.use("/api/categoria", require("./CategoriaRoutes"))
router.use("/api/cidade", require("./CidadeRoutes"))
router.use("/api/cliente", require("./ClienteRoutes"))
router.use("/api/compraproduto", require("./CompraProdutoRoutes"))
router.use("/api/conta", require("./ContaRoutes"))
router.use("/api/empresa", require("./EmpresaRoutes"))
router.use("/api/forma", require("./FormaRoutes"))
router.use("/api/fornecedor", require("./FornecedorRoutes"))
router.use("/api/itempedido", require("./ItemPedidoRoutes"))
router.use("/api/nfcliente", require("./NotaFiscalClienteRoutes"))
router.use("/api/perfilusuario", require("./PerfilUsuarioRoutes"))
router.use("/api/produto", require("./ProdutoRoutes"))
router.use("/api/registro", require("./RegistroRoutes"))
router.use("/api/tabelapreco", require("./TabelaPrecoRoutes"))
router.use("/api/telefone", require("./TelefoneRoutes"))
router.use("/api/tipocliente", require("./TipoClienteRoutes"))
router.use("/api/usuario", require("./UsuarioRoutes"))
router.use("/api/venda", require("./VendaRoutes"))

// test route
router.get("/", (req, res) => {
  res.send("API Working!")
})

module.exports = router