import { api, requestConfig } from "../utils/config";

const insertComissao = async(data) => {
  const config = requestConfig("POST", data)

  try {
    const res = await fetch(api + "/comissao/insert", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const deleteComissao = async() => {
  const config = requestConfig("DELETE", null)

  try {
    const res = await fetch(api + "/comissao/delete", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getAllComissaos = async() => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/comissao/getall", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getComissaoById = async () => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/comissao/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const updateComissao = async (data) => {
  const config = requestConfig("PUT", data)

  try {
    const res = await fetch(api + "/comissao/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const comissaoService = {
  insertComissao,
  deleteComissao,
  getAllComissaos,
  getComissaoById,
  updateComissao,
  
}

export default comissaoService