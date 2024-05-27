const Cidade = require('../models/Cidade'); // Atualize o caminho conforme necessário

const insertCidade = async (req, res) => {
  const { nome_cidade, estado_cidade } = req.body;

  try {
    const novaCidade = await Cidade.create({
        nome_cidade, estado_cidade
    });

    res.status(201).json(novaCidade);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

const getAllCidades = async(req, res) => {
  try {
    const cidades = await Cidade.findAll({})
    return res.status(200).json(cidades)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Um erro ocorreu ao buscar todas as Cidades.' })
  }
}

const deleteCidade = async(req, res) => {
  const {id_cidade} = req.params 

  try {
    const cidade = await Cidade.findByPk(id_cidade)

    // Check if photo exists
    if(!cidade) {
      res.status(404).json({ errors: ["Cidade não encontrada!"] })
      return
    }

    await Cidade.destroy({
      where: {
        id_cidade: id_cidade
      }
    })

    res
      .status(200)
      .json({ 
        id_cidade: id_cidade, message: "Cidade excluída com sucesso." 
      })
  } catch (error) {
      res.status(404).json({ errors: ["Cidade não encontrada!"] })
  }
}

const getCidadeById = async (req, res) => {
  const {id_cidade} = req.params

  try {
    const cidade = await Cidade.findByPk(id_cidade)

    // Check if photo exists
    if(!cidade) {
      res.status(404).json({ errors: ["Cidade não encontrada."]})
      return
    }

    res.status(200).json(cidade)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Ocorreu um erro ao recuperar a cidade' })
  }
}

module.exports = {
  insertCidade,
  getAllCidades,
  deleteCidade,
  getCidadeById
};

