import { api, requestConfig } from "../utils/config";

const insertPerfil = async(data) => {
  const config = requestConfig("POST", data)

  try {
    const res = await fetch(api + "/perfil/insert", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const deletePerfil = async() => {
  const config = requestConfig("DELETE", null)

  try {
    const res = await fetch(api + "/perfil/delete", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getAllPerfils = async() => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/perfil/getall", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getPerfilById = async () => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/perfil/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const updatePerfil = async (data) => {
  const config = requestConfig("PUT", data)

  try {
    const res = await fetch(api + "/perfil/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const perfilService = {
  insertPerfil,
  deletePerfil,
  getAllPerfils,
  getPerfilById,
  updatePerfil,
  
}

export default perfilService