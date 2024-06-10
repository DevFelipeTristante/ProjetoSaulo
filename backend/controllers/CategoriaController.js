const Categoria = require('../models/Categoria'); 

const insertCategoria = async (req, res) => {
  const { categoria } = req.body;

  try {
    const novaCategoria = await Categoria.create({
      categoria
    });

    res.status(201).json(novaCategoria);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

const getAllCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll({});
    return res.status(200).json(categorias);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Um erro ocorreu ao buscar todas as categorias.' });
  }
};

const deleteCategoria = async (req, res) => {
  const { id_categoria } = req.params;

  try {
    const categoria = await Categoria.findByPk(id_categoria);

    if (!categoria) {
      res.status(404).json({ errors: ["Categoria não encontrada!"] });
      return;
    }

    await Categoria.destroy({
      where: {
        id_categoria: id_categoria
      }
    });

    res.status(200).json({ id_categoria: id_categoria, message: "Categoria excluída com sucesso." });
  } catch (error) {
    res.status(404).json({ errors: ["Categoria não encontrada!"] });
  }
};

const getCategoriaById = async (req, res) => {
  const { id_categoria } = req.body;

  try {
    const categoria = await Categoria.findByPk(id_categoria);

    if (!categoria) {
      res.status(404).json({ errors: ["Categoria não encontrada."] });
      return;
    }

    res.status(200).json(categoria);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Ocorreu um erro ao recuperar a categoria.' });
  }
};

const updateCategoria = async (req, res) => {
  const { id_categoria, categoria } = req.body;

  try {
    const categoriaExistente = await Categoria.findByPk(id_categoria);

    if (!categoriaExistente) {
      res.status(404).json({ errors: ["Categoria não encontrada."] });
      return;
    }

    if (categoria) categoriaExistente.categoria = categoria;

    await categoriaExistente.save();

    res.status(200).json({ categoria: categoriaExistente, message: "Categoria atualizada com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: ["Houve um problema, por favor tente novamente mais tarde."] });
  }
};

module.exports = {
  insertCategoria,
  getAllCategorias,
  deleteCategoria,
  getCategoriaById,
  updateCategoria
};
