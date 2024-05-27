// controllers/ProdutoController.js
const PerfilUsuario = require('../models/PerfilUsuario'); 

const insertPerfil = async (req, res) => {
  const { descricao } = req.body;

  try {
    // Create a new CategoriaProduto
    const novoPerfil = await PerfilUsuario.create({
      descricao
    });

    // If CategoriaProduto was created successfully, return data
    res.status(201).json(novoPerfil);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

module.exports = {
  insertPerfil
};
