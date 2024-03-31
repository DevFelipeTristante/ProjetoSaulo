const express = require("express")
const router = express()

router.use("/api/categoria", require("./CategoriaProdutoRoutes"))
router.use("/api/cidades", require("./CidadesRoutes"))

// test route
router.get("/", (req, res) => {
  res.send("API Working!")
})

module.exports = router