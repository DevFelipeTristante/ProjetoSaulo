import {api, requestConfig} from "../utils/config"

// Get user details
const profile = async(data, token) => {
  const config = requestConfig("GET", data)

  try {
    const res = await fetch(api + "/usuario/profile/:id_usuario", config)
      .then((res) => res.json())
      .catch((err) => err)
    
      return res
  } catch (error) {
    console.log(error)
  }
}

const usuarioService = {
  profile
}

export default usuarioService  