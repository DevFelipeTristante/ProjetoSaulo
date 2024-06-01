// controllers/FormaController.js
const FormaPagamento = require('../models/FormaPagamento'); 

const insertForma = async (req, res) => {
  const { descricao } = req.body;

  try {
    const novaForma = await FormaPagamento.create({
      descricao
    });
    res.status(201).json(novaForma);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

const getAllFormas = async (req, res) => {
  try {
    const formas = await FormaPagamento.findAll({});
    res.status(200).json(formas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Um erro ocorreu ao buscar todas as formas de pagamento.' });
  }
};

const deleteForma = async (req, res) => {
  const { id_forma } = req.params;

  try {
    const forma = await FormaPagamento.findByPk(id_forma);

    if (!forma) {
      res.status(404).json({ errors: ["Forma de pagamento não encontrada!"] });
      return;
    }

    await FormaPagamento.destroy({
      where: { id_forma: id_forma }
    });

    res.status(200).json({ id_forma: id_forma, message: "Forma de pagamento excluída com sucesso." });
  } catch (error) {
    res.status(404).json({ errors: ["Forma de pagamento não encontrada!"] });
  }
};

const getFormaById = async (req, res) => {
  const { id_forma } = req.params;

  try {
    const forma = await FormaPagamento.findByPk(id_forma);

    if (!forma) {
      res.status(404).json({ errors: ["Forma de pagamento não encontrada."] });
      return;
    }

    res.status(200).json(forma);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro ao recuperar a forma de pagamento.' });
  }
};

const updateForma = async (req, res) => {
  const { id_forma } = req.params;
  const { descricao } = req.body;

  try {
    const formaExistente = await FormaPagamento.findByPk(id_forma);

    if (!formaExistente) {
      res.status(404).json({ errors: ["Forma de pagamento não encontrada."] });
      return;
    }

    if (descricao) formaExistente.descricao = descricao;

    await formaExistente.save();

    res.status(200).json({ forma: formaExistente, message: "Forma de pagamento atualizada com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: ["Houve um problema, por favor tente novamente mais tarde."] });
  }
};

module.exports = {
  insertForma,
  getAllFormas,
  deleteForma,
  getFormaById,
  updateForma
};
