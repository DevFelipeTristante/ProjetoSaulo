import { api, requestConfig } from "../utils/config";

const insertRegistro = async(data) => {
  const config = requestConfig("POST", data)

  try {
    const res = await fetch(api + "/registro/insert", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const deleteRegistro = async() => {
  const config = requestConfig("DELETE", null)

  try {
    const res = await fetch(api + "/registro/delete", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getAllRegistros = async() => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/registro/getall", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getRegistroById = async () => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/registro/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const updateRegistro = async (data) => {
  const config = requestConfig("PUT", data)

  try {
    const res = await fetch(api + "/registro/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const registroService = {
  insertRegistro,
  deleteRegistro,
  getAllRegistros,
  getRegistroById,
  updateRegistro,
  
}

export default registroService