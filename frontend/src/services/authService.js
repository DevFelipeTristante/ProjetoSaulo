import {api, requestConfig} from "../utils/config"

// Register an user
const register = async(data) => {
  const config = requestConfig("POST", data)

  try {
    const res = await fetch(api + "/usuario/register", config)
      .then((res) => res.json())
      .catch((err) => err)

    if(res.id_usuario) {
      localStorage.setItem("usuario", JSON.stringify(res))
    }

    return res
  } catch (error) {
    console.log(error)
  }
}

// Logout an user 
const logout = () => {
  localStorage.removeItem("usuario")
}

// Sign in an user
const login = async(data) => {
  const config = requestConfig("POST", data)

  try {
    const res = await fetch(api + "/usuario/login", config)
      .then((res) => res.json())
      .catch((err) => err)

    if(res.id_usuario) {
      localStorage.setItem("usuario", JSON.stringify(res))
    }

    return res
  } catch (error) {
    console.log(error)
  }
}

const authService = {
  register,
  logout,
  login
}

export default authService