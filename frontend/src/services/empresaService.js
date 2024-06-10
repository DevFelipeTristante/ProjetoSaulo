import { api, requestConfig } from "../utils/config";

const insertEmpresa = async(data) => {
  const config = requestConfig("POST", data)

  try {
    const res = await fetch(api + "/empresa/insert", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const deleteEmpresa = async(id_empresa) => {
  const config = requestConfig("DELETE", null)

  try {
    const res = await fetch(api + "/empresa/delete/" + id_empresa, config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getAllEmpresas = async() => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/empresa/getall", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getProdutosVendidosEmpresa = async(id_empresa) => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + `/empresa/getempresa?id_empresa=${id_empresa}`, config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getEmpresaById = async () => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/empresa/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const updateEmpresa = async (data) => {
  const config = requestConfig("PUT", data)

  try {
    const res = await fetch(api + "/empresa/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const empresaService = {
  insertEmpresa,
  deleteEmpresa,
  getAllEmpresas,
  getProdutosVendidosEmpresa,
  getEmpresaById,
  updateEmpresa,
  
}

export default empresaService