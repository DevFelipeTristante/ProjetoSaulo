const Venda = require('../models/Venda'); // Atualize o caminho conforme necessário

// Insere uma nova venda
const insertVenda = async (req, res) => {
  const { id_usuario, id_cliente, valor_venda, id_forma, qtde_parcelas, data, id_empresa } = req.body;

  try {
    // Cria uma nova Venda
    const novaVenda = await Venda.create({
      id_usuario, id_cliente, valor_venda, id_forma, qtde_parcelas, data, id_empresa
    });

    // Se a venda foi criada com sucesso, retorna os dados
    res.status(201).json(novaVenda);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

// Obtém todas as vendas
const getAllVendas = async (req, res) => {
  try {
    const vendas = await Venda.findAll({});
    return res.status(200).json(vendas);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Um erro ocorreu ao buscar todas as vendas.' });
  }
};

// Obtém uma venda por ID
const getVendaById = async (req, res) => {
  const { id_venda } = req.params;

  try {
    const venda = await Venda.findByPk(id_venda);

    // Verifica se a venda existe
    if (!venda) {
      res.status(404).json({ errors: ["Venda não encontrada."] });
      return;
    }

    res.status(200).json(venda);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Ocorreu um erro ao recuperar a venda' });
  }
};

// Atualiza uma venda
const updateVenda = async (req, res) => {
  const { id_venda } = req.params;
  const { id_usuario, id_cliente, valor_venda, id_forma, qtde_parcelas, data, id_empresa } = req.body;

  try {
    const vendaExistente = await Venda.findByPk(id_venda);

    // Verifica se a venda existe
    if (!vendaExistente) {
      res.status(404).json({ errors: ["Venda não encontrada."] });
      return;
    }

    if (id_usuario) vendaExistente.id_usuario = id_usuario;
    if (id_cliente) vendaExistente.id_cliente = id_cliente;
    if (valor_venda) vendaExistente.valor_venda = valor_venda;
    if (id_forma) vendaExistente.id_forma = id_forma;
    if (qtde_parcelas) vendaExistente.qtde_parcelas = qtde_parcelas;
    if (data) vendaExistente.data = data;
    if (id_empresa) vendaExistente.id_empresa = id_empresa;

    await vendaExistente.save();

    res.status(200).json({ venda: vendaExistente, message: "Venda atualizada com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: ["Houve um problema, por favor tente novamente mais tarde."] });
  }
};

// Deleta uma venda
const deleteVenda = async (req, res) => {
  const { id_venda } = req.params;

  try {
    const venda = await Venda.findByPk(id_venda);

    // Verifica se a venda existe
    if (!venda) {
      res.status(404).json({ errors: ["Venda não encontrada!"] });
      return;
    }

    await Venda.destroy({
      where: { id_venda: id_venda }
    });

    res.status(200).json({ id_venda: id_venda, message: "Venda excluída com sucesso." });
  } catch (error) {
    res.status(404).json({ errors: ["Venda não encontrada!"] });
  }
};

module.exports = {
  insertVenda,
  getAllVendas,
  getVendaById,
  updateVenda,
  deleteVenda
};
