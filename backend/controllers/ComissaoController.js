const Comissao = require('../models/Comissao'); 

const connection = require('../config/connection');

const insertComissao = async (req, res) => {
  const { id_usuario, valor_comissao, valor_total, comissao_paga } = req.body;

  try {
    const novaComissao = await Comissao.create({
      id_usuario, valor_comissao, valor_total, comissao_paga
    });

    res.status(201).json(novaComissao);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

const getAllComissaos = async (req, res) => {
  try {
    const comissaos = await Comissao.findAll({});
    return res.status(200).json(comissaos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Um erro ocorreu ao buscar todas as comissões.' });
  }
};

const deleteComissao = async (req, res) => {
  const { id_comissao } = req.body;

  try {
    const comissao = await Comissao.findByPk(id_comissao);

    if (!comissao) {
      res.status(404).json({ errors: ["Comissão não encontrada!"] });
      return;
    }

    await Comissao.destroy({
      where: {
        id_comissao: id_comissao
      }
    });

    res.status(200).json({ id_comissao: id_comissao, message: "Comissão excluída com sucesso." });
  } catch (error) {
    res.status(404).json({ errors: ["Comissão não encontrada!"] });
  }
};

const getComissaoVendedor = (req, res) => {
  // Query para buscar as contas entre as datas especificadas
  const query = `
    SELECT c.id_comissao, u.nome_usuario, c.valor_comissao, c.valor_total, c.comissao_paga FROM comissao_vendedor c, usuario u where c.id_usuario = u.id_usuario;
  `;

  connection.query(query, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Um erro ocorreu ao buscar os produtos mais vendidos.' });
    }
    return res.status(200).json(results);
  });
};

const getComissaoById = async (req, res) => {
  const { id_comissao } = req.body;

  try {
    const comissao = await Comissao.findByPk(id_comissao);

    if (!comissao) {
      res.status(404).json({ errors: ["Comissão não encontrada."] });
      return;
    }

    res.status(200).json(comissao);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Ocorreu um erro ao recuperar a comissao.' });
  }
};

const updateComissao = async (req, res) => {
  const { id_comissao, id_usuario, valor_comissao, valor_total, comissao_paga } = req.body;

  try {
    const comissaoExistente = await Comissao.findByPk(id_comissao);

    if (!comissaoExistente) {
      res.status(404).json({ errors: ["Comissão não encontrada."] });
      return;
    }

    if (id_usuario) comissaoExistente.id_usuario = id_usuario;
    if (valor_comissao) comissaoExistente.valor_comissao = valor_comissao;
    if (valor_total) comissaoExistente.valor_total = valor_total;
    if (comissao_paga) comissaoExistente.comissao_paga = comissao_paga;

    await comissaoExistente.save();

    res.status(200).json({ comissao: comissaoExistente, message: "Comissão atualizada com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: ["Houve um problema, por favor tente novamente mais tarde."] });
  }
};

module.exports = {
  insertComissao,
  getAllComissaos,
  deleteComissao,
  getComissaoVendedor,
  getComissaoById,
  updateComissao
};
