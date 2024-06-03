import { api, requestConfig } from "../utils/config";

const insertConta = async(data) => {
  const config = requestConfig("POST", data)

  try {
    const res = await fetch(api + "/conta/insert", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const deleteConta = async() => {
  const config = requestConfig("DELETE", null)

  try {
    const res = await fetch(api + "/conta/delete", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getAllContas = async() => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/conta/getall", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getContaById = async () => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/conta/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const updateConta = async (data) => {
  const config = requestConfig("PUT", data)

  try {
    const res = await fetch(api + "/conta/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const contaService = {
  insertConta,
  deleteConta,
  getAllContas,
  getContaById,
  updateConta,
  
}

export default contaService