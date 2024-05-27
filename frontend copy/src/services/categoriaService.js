import { api, requestConfig } from "../utils/config";

// Publish an user car
const insertCategoria = async(data) => {
  const config = requestConfig("POST", data)

  try {
    const res = await fetch(api + "/categoria/insert", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getCategorias = async() => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/categoria", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const categoriaService = {
  insertCategoria,
  getCategorias
}

export default categoriaService