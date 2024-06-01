const TabelaPreco = require('../models/TabelaPreco'); // Atualize o caminho conforme necessário

// Inserir uma nova tabela de preço
const insertTabelaPreco = async (req, res) => {
  const { id_tabela, id_produto, preco } = req.body;

  try {
    const novaTabela = await TabelaPreco.create({ id_tabela, id_produto, preco });
    res.status(201).json(novaTabela);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

// Listar todas as tabelas de preço
const getAllTabelasPreco = async (req, res) => {
  try {
    const tabelas = await TabelaPreco.findAll({});
    res.status(200).json(tabelas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Um erro ocorreu ao buscar todas as tabelas de preço.' });
  }
};

// Deletar uma tabela de preço pelo ID
const deleteTabelaPreco = async (req, res) => {
  const { id_tabela } = req.body;

  try {
    const tabela = await TabelaPreco.findByPk(id_tabela);

    if (!tabela) {
      res.status(404).json({ errors: ["Tabela de preço não encontrada!"] });
      return;
    }

    await TabelaPreco.destroy({ where: { id_tabela } });

    res.status(200).json({ id_tabela, message: "Tabela de preço excluída com sucesso." });
  } catch (error) {
    res.status(404).json({ errors: ["Tabela de preço não encontrada!"] });
  }
};

// Obter uma tabela de preço pelo ID
const getTabelaPrecoById = async (req, res) => {
  const { id_tabela } = req.body;

  try {
    const tabela = await TabelaPreco.findByPk(id_tabela);

    if (!tabela) {
      res.status(404).json({ errors: ["Tabela de preço não encontrada."] });
      return;
    }

    res.status(200).json(tabela);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro ao recuperar a tabela de preço.' });
  }
};

// Atualizar uma tabela de preço pelo ID
const updateTabelaPreco = async (req, res) => {
  const { id_tabela, id_produto, preco } = req.body;

  try {
    const tabelaExistente = await TabelaPreco.findByPk(id_tabela);

    if (!tabelaExistente) {
      res.status(404).json({ errors: ["Tabela de preço não encontrada."] });
      return;
    }

    if (id_tabela) tabelaExistente.id_tabela = id_tabela;
    if (id_produto) tabelaExistente.id_produto = id_produto;
    if (preco) tabelaExistente.preco = preco;

    await tabelaExistente.save();

    res.status(200).json({ tabela: tabelaExistente, message: "Tabela de preço atualizada com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: ["Houve um problema, por favor tente novamente mais tarde."] });
  }
};

module.exports = {
  insertTabelaPreco,
  getAllTabelasPreco,
  deleteTabelaPreco,
  getTabelaPrecoById,
  updateTabelaPreco
};
