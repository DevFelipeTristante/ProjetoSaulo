const express = require("express")
const router = express()

router.use("/api/categoria", require("./CategoriaProdutoRoutes"))
router.use("/api/cidades", require("./CidadesRoutes"))
<<<<<<< HEAD
router.use("/api/cliente", require("./ClienteRoutes"))
router.use("/api/conta", require("./ContaRoutes"))
router.use("/api/empresa", require("./EmpresaRoutes"))
router.use("/api/estoque", require("./EstoqueRoutes"))
router.use("/api/formapagamento", require("./FormaPagamentoRoutes"))
router.use("/api/fornecedor", require("./FornecedorRoutes"))
router.use("/api/notafiscalcliente", require("./NotaFiscalClienteRoutes"))
router.use("/api/notafiscalfornecedor", require("./NotaFiscalFornecedorRoutes"))
router.use("/api/perfilusuario", require("./PerfilUsuarioRoutes"))
router.use("/api/produto", require("./ProdutoRoutes"))
router.use("/api/registros", require("./RegistrosRoutes"))
router.use("/api/tabelapreco", require("./TabelaPrecoRoutes"))
router.use("/api/telefone", require("./TelefoneRoutes"))
router.use("/api/tipocliente", require("./TipoClienteRoutes"))
router.use("/api/usuario", require("./UsuarioRoutes"))
router.use("/api/venda", require("./VendaRoutes"))
=======
>>>>>>> a7a8ff1e26a1cf6b7cddc6c57954a568114e9c12

// test route
router.get("/", (req, res) => {
  res.send("API Working!")
})

module.exports = router