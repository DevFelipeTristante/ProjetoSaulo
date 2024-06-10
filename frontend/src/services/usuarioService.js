import { api, requestConfig } from "../utils/config";

const insertUsuario = async(data) => {
  const config = requestConfig("POST", data)

  try {
    const res = await fetch(api + "/usuario/insert", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const deleteUsuario = async(id_usuario) => {
  const config = requestConfig("DELETE", null)

  try {
    const res = await fetch(api + "/usuario/delete/" + id_usuario, config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getAllUsuarios = async() => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/usuario/getall", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getUsuarioById = async () => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/usuario/get", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const updateUsuario = async (data) => {
  const config = requestConfig("PUT", data)

  try {
    const res = await fetch(api + "/usuario/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const usuarioService = {
  insertUsuario,
  deleteUsuario,
  getAllUsuarios,
  getUsuarioById,
  updateUsuario,
  
}

export default usuarioService