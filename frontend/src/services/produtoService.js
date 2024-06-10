import { api, requestConfig } from "../utils/config";

const insertProduto = async(data) => {
  const config = requestConfig("POST", data)

  try {
    const res = await fetch(api + "/produto/insert", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const deleteProduto = async(id_produto) => {
  const config = requestConfig("DELETE", null)

  try {
    const res = await fetch(api + "/produto/delete/" + id_produto, config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getAllProdutos = async() => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/produto/getall", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getProdutos = async() => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/produto/getprodutos", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getEntrada = async(data_inicial, data_final) => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + `/produto/getentrada?data_inicial=${data_inicial}&data_final=${data_final}`, config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getSaida = async(data_inicial, data_final) => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + `/produto/getsaida?data_inicial=${data_inicial}&data_final=${data_final}`, config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getProdutoById = async () => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/produto/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const updateProduto = async (data) => {
  const config = requestConfig("PUT", data)

  try {
    const res = await fetch(api + "/produto/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const produtoService = {
  insertProduto,
  deleteProduto,
  getAllProdutos,
  getProdutos,
  getEntrada,
  getSaida,
  getProdutoById,
  updateProduto,
  
}

export default produtoService