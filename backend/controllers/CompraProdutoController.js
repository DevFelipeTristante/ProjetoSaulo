const CompraProduto = require('../models/CompraProduto'); // Atualize o caminho conforme necessário

const insertCompra = async (req, res) => {
  const { numeroNF, valor, quantidade, data_nf, id_produto } = req.body;

  try {
    const novaCompra = await CompraProduto.create({
      numeroNF, valor, quantidade, data_nf, id_produto    
    });

    res.status(201).json(novaCompra);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

const getAllCompras = async (req, res) => {
  try {
    const compras = await CompraProduto.findAll({});
    return res.status(200).json(compras);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Um erro ocorreu ao buscar todas as compras.' });
  }
}

const deleteCompra = async (req, res) => {
  const { numeroNF } = req.body;

  try {
    const compra = await CompraProduto.findByPk(numeroNF);

    if (!compra) {
      res.status(404).json({ errors: ["Compra não encontrada!"] });
      return;
    }

    await CompraProduto.destroy({
      where: {
        numeroNF: numeroNF
      }
    });

    res.status(200).json({ numeroNF, message: "Compra excluída com sucesso." });
  } catch (error) {
    res.status(404).json({ errors: ["Compra não encontrada!"] });
  }
}

const getCompraById = async (req, res) => {
  const { numeroNF } = req.body;

  try {
    const compra = await CompraProduto.findByPk(numeroNF);

    if (!compra) {
      res.status(404).json({ errors: ["Compra não encontrada."] });
      return;
    }

    res.status(200).json(compra);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Ocorreu um erro ao recuperar a compra' });
  }
}

const updateCompra = async (req, res) => {
  const { numeroNF, valor, quantidade, data_nf, id_produto } = req.body;

  try {
    const compraExistente = await CompraProduto.findByPk(numeroNF);

    if (!compraExistente) {
      res.status(404).json({ errors: ["Compra não encontrada."] });
      return;
    }

    if (valor) compraExistente.valor = valor;
    if (quantidade) compraExistente.quantidade = quantidade;
    if (data_nf) compraExistente.data_nf = data_nf;
    if (id_produto) compraExistente.id_produto = id_produto;

    await compraExistente.save();

    res.status(200).json({ compra: compraExistente, message: "Compra atualizada com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: ["Houve um problema, por favor tente novamente mais tarde."] });
  }
}

module.exports = {
  insertCompra,
  getAllCompras,
  deleteCompra,
  getCompraById,
  updateCompra
};
