import { api, requestConfig } from "../utils/config";

const insertNfcliente = async(data) => {
  const config = requestConfig("POST", data)

  try {
    const res = await fetch(api + "/nfcliente/insert", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const deleteNfcliente = async() => {
  const config = requestConfig("DELETE", null)

  try {
    const res = await fetch(api + "/nfcliente/delete", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getAllNfclientes = async() => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/nfcliente/getall", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getNfclienteById = async () => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/nfcliente/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const updateNfcliente = async (data) => {
  const config = requestConfig("PUT", data)

  try {
    const res = await fetch(api + "/nfcliente/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const nfclienteService = {
  insertNfcliente,
  deleteNfcliente,
  getAllNfclientes,
  getNfclienteById,
  updateNfcliente,
  
}

export default nfclienteService