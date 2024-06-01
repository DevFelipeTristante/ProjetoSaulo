const Registro = require('../models/Registro'); // Atualize o caminho conforme necessário

// Inserir um novo registro
const insertRegistro = async (req, res) => {
  const { data_registro, id_venda } = req.body;

  try {
    const novoRegistro = await Registro.create({ data_registro, id_venda });
    res.status(201).json(novoRegistro);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

// Listar todos os registros
const getAllRegistros = async (req, res) => {
  try {
    const registros = await Registro.findAll({});
    res.status(200).json(registros);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Um erro ocorreu ao buscar todos os registros.' });
  }
};

// Deletar um registro pelo ID
const deleteRegistro = async (req, res) => {
  const { id_registro } = req.params;

  try {
    const registro = await Registro.findByPk(id_registro);

    if (!registro) {
      res.status(404).json({ errors: ["Registro não encontrado!"] });
      return;
    }

    await Registro.destroy({ where: { id_registro } });

    res.status(200).json({ id_registro, message: "Registro excluído com sucesso." });
  } catch (error) {
    res.status(404).json({ errors: ["Registro não encontrado!"] });
  }
};

// Obter um registro pelo ID
const getRegistroById = async (req, res) => {
  const { id_registro } = req.params;

  try {
    const registro = await Registro.findByPk(id_registro);

    if (!registro) {
      res.status(404).json({ errors: ["Registro não encontrado."] });
      return;
    }

    res.status(200).json(registro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro ao recuperar o registro.' });
  }
};

// Atualizar um registro pelo ID
const updateRegistro = async (req, res) => {
  const { id_registro } = req.params;
  const { data_registro, id_venda } = req.body;

  try {
    const registroExistente = await Registro.findByPk(id_registro);

    if (!registroExistente) {
      res.status(404).json({ errors: ["Registro não encontrado."] });
      return;
    }

    if (data_registro) registroExistente.data_registro = data_registro;
    if (id_venda) registroExistente.id_venda = id_venda;

    await registroExistente.save();

    res.status(200).json({ registro: registroExistente, message: "Registro atualizado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: ["Houve um problema, por favor tente novamente mais tarde."] });
  }
};

module.exports = {
  insertRegistro,
  getAllRegistros,
  deleteRegistro,
  getRegistroById,
  updateRegistro
};
