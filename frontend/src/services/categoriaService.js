import { api, requestConfig } from "../utils/config";

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

const deleteCategoria = async(id_categoria) => {
  const config = requestConfig("DELETE", null)

  try {
    const res = await fetch(api + "/categoria/delete/" + id_categoria, config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getAllCategorias = async() => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/categoria/getall", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getCategoriaById = async () => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/categoria/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const updateCategoria = async (data) => {
  const config = requestConfig("PUT", data)

  try {
    const res = await fetch(api + "/categoria/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const categoriaService = {
  insertCategoria,
  deleteCategoria,
  getAllCategorias,
  getCategoriaById,
  updateCategoria,
  
}

export default categoriaService