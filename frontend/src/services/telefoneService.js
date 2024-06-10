import { api, requestConfig } from "../utils/config";

const insertTelefone = async(data) => {
  const config = requestConfig("POST", data)

  try {
    const res = await fetch(api + "/telefone/insert", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const deleteTelefone = async(id_telefone) => {
  const config = requestConfig("DELETE", null)

  try {
    const res = await fetch(api + "/telefone/delete/" + id_telefone, config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getAllTelefones = async() => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/telefone/getall", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getTelefoneById = async () => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/telefone/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const updateTelefone = async (data) => {
  const config = requestConfig("PUT", data)

  try {
    const res = await fetch(api + "/telefone/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const telefoneService = {
  insertTelefone,
  deleteTelefone,
  getAllTelefones,
  getTelefoneById,
  updateTelefone,
  
}

export default telefoneService