// controllers/ProdutoController.js
const FormaPagamento = require('../models/FormaPagamento'); 

const insertForma = async (req, res) => {
  const { descricao } = req.body;

  try {
    // Create a new CategoriaProduto
    const novaForma = await FormaPagamento.create({
      descricao
    });

    // If CategoriaProduto was created successfully, return data
    res.status(201).json(novaForma);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

module.exports = {
  insertForma
};
