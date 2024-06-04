import { api, requestConfig } from "../utils/config";

const insertFornecedor = async(data) => {
  const config = requestConfig("POST", data)

  try {
    const res = await fetch(api + "/fornecedor/insert", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const deleteFornecedor = async() => {
  const config = requestConfig("DELETE", null)

  try {
    const res = await fetch(api + "/fornecedor/delete", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getAllFornecedors = async() => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/fornecedor/getall", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getFornecedorById = async () => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/fornecedor/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const updateFornecedor = async (data) => {
  const config = requestConfig("PUT", data)

  try {
    const res = await fetch(api + "/fornecedor/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const fornecedorService = {
  insertFornecedor,
  deleteFornecedor,
  getAllFornecedors,
  getFornecedorById,
  updateFornecedor,
  
}

export default fornecedorService