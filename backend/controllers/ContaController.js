const Conta = require('../models/Conta'); // Atualize o caminho conforme necessário

const insertConta = async (req, res) => {
  const { data_conta, id_cliente, id_venda, id_estoque, id_empresa, qtde_parcelas, valor_parcela } = req.body;

  try {
    // Create a new CategoriaProduto
    const novaConta = await Conta.create({
      data_conta, id_cliente, id_venda, id_estoque, id_empresa, qtde_parcelas, valor_parcela
    });

    // If CategoriaProduto was created successfully, return data
    res.status(201).json(novaConta);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

const getAllContas = async(req, res) => {
  try {
    const contas = await Conta.findAll({})
    return res.status(200).json(contas)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Um erro ocorreu ao buscar todas as contas.' })
  }
}

const deleteConta = async(req, res) => {
  const {id_conta} = req.params 

  try {
    const conta = await Conta.findByPk(id_conta)

    // Check if photo exists
    if(!conta) {
      res.status(404).json({ errors: ["Conta não encontrada!"] })
      return
    }

    await Conta.destroy({
      where: {
        id_conta: id_conta
      }
    })

    res
      .status(200)
      .json({ 
        id_conta: id_conta, message: "Conta excluída com sucesso." 
      })
  } catch (error) {
      res.status(404).json({ errors: ["Conta não encontrada!"] })
  }
}

const getContaById = async (req, res) => {
  const {id_conta} = req.params

  try {
    const conta = await Conta.findByPk(id_conta)

    // Check if photo exists
    if(!conta) {
      res.status(404).json({ errors: ["Conta não encontrada."]})
      return
    }

    res.status(200).json(conta)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Ocorreu um erro ao recuperar a conta' })
  }
}

module.exports = {
  insertConta,
  getAllContas,
  deleteConta,
  getContaById
};
