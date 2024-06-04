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

const deleteProduto = async() => {
  const config = requestConfig("DELETE", null)

  try {
    const res = await fetch(api + "/produto/delete", config)
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
  getProdutoById,
  updateProduto,
  
}

export default produtoService