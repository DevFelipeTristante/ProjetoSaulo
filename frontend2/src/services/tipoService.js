import { api, requestConfig } from "../utils/config";

const insertTipo = async(data) => {
  const config = requestConfig("POST", data)

  try {
    const res = await fetch(api + "/tipo/insert", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const deleteTipo = async() => {
  const config = requestConfig("DELETE", null)

  try {
    const res = await fetch(api + "/tipo/delete", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getAllTipos = async() => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/tipo/getall", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getTipoById = async () => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/tipo/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const updateTipo = async (data) => {
  const config = requestConfig("PUT", data)

  try {
    const res = await fetch(api + "/tipo/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const tipoService = {
  insertTipo,
  deleteTipo,
  getAllTipos,
  getTipoById,
  updateTipo,
  
}

export default tipoService