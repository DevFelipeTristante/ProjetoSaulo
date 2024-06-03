import { api, requestConfig } from "../utils/config";

const insertCidade = async(data) => {
  const config = requestConfig("POST", data)

  try {
    const res = await fetch(api + "/cidade/insert", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const deleteCidade = async() => {
  const config = requestConfig("DELETE", null)

  try {
    const res = await fetch(api + "/cidade/delete", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getAllCidades = async() => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/cidade/getall", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getCidadeById = async () => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/cidade/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const updateCidade = async (data) => {
  const config = requestConfig("PUT", data)

  try {
    const res = await fetch(api + "/cidade/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const cidadeService = {
  insertCidade,
  deleteCidade,
  getAllCidades,
  getCidadeById,
  updateCidade,
  
}

export default cidadeService