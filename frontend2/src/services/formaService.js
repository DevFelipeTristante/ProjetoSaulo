import { api, requestConfig } from "../utils/config";

const insertForma = async(data) => {
  const config = requestConfig("POST", data)

  try {
    const res = await fetch(api + "/forma/insert", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const deleteForma = async() => {
  const config = requestConfig("DELETE", null)

  try {
    const res = await fetch(api + "/forma/delete", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getAllFormas = async() => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/forma/getall", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getFormaById = async () => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/forma/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const updateForma = async (data) => {
  const config = requestConfig("PUT", data)

  try {
    const res = await fetch(api + "/forma/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const formaService = {
  insertForma,
  deleteForma,
  getAllFormas,
  getFormaById,
  updateForma,
  
}

export default formaService