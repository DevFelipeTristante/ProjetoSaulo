import { api, requestConfig } from "../utils/config";

const insertCompra = async(data) => {
  const config = requestConfig("POST", data)

  try {
    const res = await fetch(api + "/compra/insert", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const deleteCompra = async(numeroNF) => {
  const config = requestConfig("DELETE", null)

  try {
    const res = await fetch(api + "/compra/delete/" + numeroNF, config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getAllCompras = async() => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/compra/getall", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getCompraById = async () => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/compra/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const updateCompra = async (data) => {
  const config = requestConfig("PUT", data)

  try {
    const res = await fetch(api + "/compra/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const compraService = {
  insertCompra,
  deleteCompra,
  getAllCompras,
  getCompraById,
  updateCompra,
  
}

export default compraService