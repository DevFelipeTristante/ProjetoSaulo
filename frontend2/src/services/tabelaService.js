import { api, requestConfig } from "../utils/config";

const insertTabela = async(data) => {
  const config = requestConfig("POST", data)

  try {
    const res = await fetch(api + "/tabela/insert", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const deleteTabela = async() => {
  const config = requestConfig("DELETE", null)

  try {
    const res = await fetch(api + "/tabela/delete", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getAllTabelas = async() => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/tabela/getall", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getTabelaById = async () => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/tabela/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const updateTabela = async (data) => {
  const config = requestConfig("PUT", data)

  try {
    const res = await fetch(api + "/tabela/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const tabelaService = {
  insertTabela,
  deleteTabela,
  getAllTabelas,
  getTabelaById,
  updateTabela,
  
}

export default tabelaService