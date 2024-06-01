const ItemPedido = require('../models/ItemPedido'); // Atualize o caminho conforme necessário

// Inserir um novo item de pedido
const insertItemPedido = async (req, res) => {
  const { id_venda, id_produto, id_tabela, preco_total, quantidade } = req.body;

  try {
    const novoItem = await ItemPedido.create({
      id_venda, id_produto, id_tabela, preco_total, quantidade
    });
    res.status(201).json(novoItem);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

// Listar todos os itens de pedido
const getAllItensPedido = async (req, res) => {
  try {
    const itens = await ItemPedido.findAll({});
    res.status(200).json(itens);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Um erro ocorreu ao buscar todos os itens de pedido.' });
  }
};

// Deletar um item de pedido pelo ID
const deleteItemPedido = async (req, res) => {
  const { id_item } = req.body;

  try {
    const item = await ItemPedido.findByPk(id_item);

    if (!item) {
      res.status(404).json({ errors: ["Item de pedido não encontrado!"] });
      return;
    }

    await ItemPedido.destroy({
      where: { id_item: id_item }
    });

    res.status(200).json({ id_item: id_item, message: "Item de pedido excluído com sucesso." });
  } catch (error) {
    res.status(404).json({ errors: ["Item de pedido não encontrado!"] });
  }
};

// Obter um item de pedido pelo ID
const getItemPedidoById = async (req, res) => {
  const { id_item } = req.body;

  try {
    const item = await ItemPedido.findByPk(id_item);

    if (!item) {
      res.status(404).json({ errors: ["Item de pedido não encontrado."] });
      return;
    }

    res.status(200).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro ao recuperar o item de pedido.' });
  }
};

// Atualizar um item de pedido pelo ID
const updateItemPedido = async (req, res) => {
  const { id_item, id_venda, id_produto, id_tabela, preco_total, quantidade } = req.body;

  try {
    const itemExistente = await ItemPedido.findByPk(id_item);

    if (!itemExistente) {
      res.status(404).json({ errors: ["Item de pedido não encontrado."] });
      return;
    }

    if (id_venda !== undefined) itemExistente.id_venda = id_venda;
    if (id_produto !== undefined) itemExistente.id_produto = id_produto;
    if (id_tabela !== undefined) itemExistente.id_tabela = id_tabela;
    if (preco_total !== undefined) itemExistente.preco_total = preco_total;
    if (quantidade !== undefined) itemExistente.quantidade = quantidade;

    await itemExistente.save();

    res.status(200).json({ item: itemExistente, message: "Item de pedido atualizado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: ["Houve um problema, por favor tente novamente mais tarde."] });
  }
};

module.exports = {
  insertItemPedido,
  getAllItensPedido,
  deleteItemPedido,
  getItemPedidoById,
  updateItemPedido
};
