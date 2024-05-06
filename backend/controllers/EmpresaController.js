const Empresa = require('../models/Empresa'); // Atualize o caminho conforme necessário

const insertEmpresa = async (req, res) => {
  const { cnpj, nome, cidade } = req.body;

  try {
    // Create a new Empresa
    const novaEmpresa = await Empresa.create({
      cnpj, nome, cidade
    });

    // If Empresa was created successfully, return data
    res.status(201).json(novaEmpresa);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

module.exports = {
  insertEmpresa
};
