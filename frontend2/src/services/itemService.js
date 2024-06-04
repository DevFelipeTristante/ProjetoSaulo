import { api, requestConfig } from "../utils/config";

const insertItem = async(data) => {
  const config = requestConfig("POST", data)

  try {
    const res = await fetch(api + "/item/insert", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const deleteItem = async() => {
  const config = requestConfig("DELETE", null)

  try {
    const res = await fetch(api + "/item/delete", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getAllItems = async() => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/item/getall", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const getItemById = async () => {
  const config = requestConfig("GET", null)

  try {
    const res = await fetch(api + "/item/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const updateItem = async (data) => {
  const config = requestConfig("PUT", data)

  try {
    const res = await fetch(api + "/item/update", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const itemService = {
  insertItem,
  deleteItem,
  getAllItems,
  getItemById,
  updateItem,
  
}

export default itemService