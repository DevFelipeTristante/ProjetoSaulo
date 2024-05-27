const NotaFiscalCliente = require('../models/NotaFiscalCliente'); // Atualize o caminho conforme necessário

const insertNFCliente = async (req, res) => {
  const { valor, quantidade, id_produto, data_nf, id_cliente, id_venda } = req.body;

  try {
    // Create a new CategoriaProduto
    const novaNFCliente = await NotaFiscalCliente.create({
      valor, quantidade, id_produto, data_nf, id_cliente, id_venda    
    });

    // If CategoriaProduto was created successfully, return data
    res.status(201).json(novaNFCliente);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

module.exports = {
  insertNFCliente
};
