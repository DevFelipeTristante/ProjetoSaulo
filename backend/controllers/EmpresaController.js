const Empresa = require('../models/Empresa'); // Atualize o caminho conforme necessário

const connection = require('../config/connection');

const insertEmpresa = async (req, res) => {
  const { cnpj, nome, id_cidade } = req.body;

  try {
    const novaEmpresa = await Empresa.create({
      cnpj, nome, id_cidade
    });

    res.status(201).json(novaEmpresa);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

const getAllEmpresas = async (req, res) => {
  try {
    const empresas = await Empresa.findAll({});
    return res.status(200).json(empresas);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Um erro ocorreu ao buscar todas as empresas.' });
  }
};

const getProdutosVendidosEmpresa = (req, res) => {
  const { id_empresa } = req.query;

  // Query para buscar as contas entre as datas especificadas
  const query = `
    SELECT * FROM total_vendido_empresa_produto where idEmpresa = ?
  `;

  connection.query(query, [id_empresa], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Um erro ocorreu ao buscar os produtos mais vendidos por empresa.' });
    }
    return res.status(200).json(results);
  });
};

const deleteEmpresa = async (req, res) => {
  const { id_empresa } = req.params;

  try {
    const empresa = await Empresa.findByPk(id_empresa);

    if (!empresa) {
      res.status(404).json({ errors: ["Empresa não encontrada!"] });
      return;
    }

    await Empresa.destroy({
      where: {
        id_empresa: id_empresa
      }
    });

    res.status(200).json({ id_empresa, message: "Empresa excluída com sucesso." });
  } catch (error) {
    res.status(404).json({ errors: ["Empresa não encontrada!"] });
  }
};

const getEmpresaById = async (req, res) => {
  const { id_empresa } = req.body;

  try {
    const empresa = await Empresa.findByPk(id_empresa);

    if (!empresa) {
      res.status(404).json({ errors: ["Empresa não encontrada."] });
      return;
    }

    res.status(200).json(empresa);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Ocorreu um erro ao recuperar a empresa' });
  }
};

const updateEmpresa = async (req, res) => {
  const { id_empresa, cnpj, nome, id_cidade } = req.body;

  try {
    const empresaExistente = await Empresa.findByPk(id_empresa);

    if (!empresaExistente) {
      res.status(404).json({ errors: ["Empresa não encontrada."] });
      return;
    }

    if (cnpj) empresaExistente.cnpj = cnpj;
    if (nome) empresaExistente.nome = nome;
    if (id_cidade) empresaExistente.id_cidade = id_cidade;

    await empresaExistente.save();

    res.status(200).json({ empresa: empresaExistente, message: "Empresa atualizada com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: ["Houve um problema, por favor tente novamente mais tarde."] });
  }
};

module.exports = {
  insertEmpresa,
  getAllEmpresas,
  getProdutosVendidosEmpresa,
  deleteEmpresa,
  getEmpresaById,
  updateEmpresa
};
