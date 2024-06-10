import { api, requestConfig } from "../utils/config";

const insertVenda = async(data) => {
  const config = requestConfig("POST", data)

  try {
    const res = await fetch(api + "/venda/insert", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const deleteVenda = async(id_venda) => {
  const config = requestConfig("DELETE", null)

  try {
    const res = await fetch(api + "/venda/delete/" + id_venda, config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getAllVendas = async() => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/venda/getall", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getVendaById = async () => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/venda/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const updateVenda = async (data) => {
  const config = requestConfig("PUT", data)

  try {
    const res = await fetch(api + "/venda/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const vendaService = {
  insertVenda,
  deleteVenda,
  getAllVendas,
  getVendaById,
  updateVenda,
  
}

export default vendaService