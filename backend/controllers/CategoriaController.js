// controllers/ProdutoController.js
const Categoria = require('../models/Categoria'); 

const insertCategoria = async (req, res) => {
  const { categoria } = req.body;

  try {
    // Create a new CategoriaProduto
    const novaCategoria = await Categoria.create({
      categoria
    });

    // If CategoriaProduto was created successfully, return data
    res.status(201).json(novaCategoria);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

const getAllCategorias = async(req, res) => {
  try {
    const categorias = await Categoria.findAll({})
    return res.status(200).json(categorias)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Um erro ocorreu ao buscar todas os produtos.' })
  }
}

module.exports = {
  insertCategoria,
  getAllCategorias
};
