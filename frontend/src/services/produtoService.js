import { api, requestConfig } from "../utils/config";

// Publish an user car
const insertProduto = async(data) => {
  const config = requestConfig("POST", data)

  try {
    const res = await fetch(api + "/produto/insert", config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const produtoService = {
  insertProduto
}

export default produtoService