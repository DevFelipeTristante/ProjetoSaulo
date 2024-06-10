import { api, requestConfig } from "../utils/config";

const insertCliente = async(data) => {
  const config = requestConfig("POST", data)

  try {
    const res = await fetch(api + "/cliente/insert", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const deleteCliente = async(id_cliente) => {
  const config = requestConfig("DELETE", null)

  try {
    const res = await fetch(api + "/cliente/delete/" + id_cliente, config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getAllClientes = async() => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/cliente/getall", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getClienteById = async () => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/cliente/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const updateCliente = async (data) => {
  const config = requestConfig("PUT", data)

  try {
    const res = await fetch(api + "/cliente/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const clienteService = {
  insertCliente,
  deleteCliente,
  getAllClientes,
  getClienteById,
  updateCliente,
  
}

export default clienteService