import "./Auth.css"

// Components
import { Link } from "react-router-dom"
import Message from "../../components/Message"

// Hooks
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

// Redux
import { login, reset } from "../../slices/authSlice"

const Login = () => {
  const [nome_usuario, setNome_usuario] = useState("")
  const [senha, setSenha] = useState("")

  const dispatch = useDispatch()

  const { loading, error } = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault()

    const usuario = {
      nome_usuario,
      senha
    }

    dispatch(login(usuario))
  }

  // Clean all auth states
  useEffect(() => {
    dispatch(reset())
  }, [dispatch])

  return (
    <div id="login">
      <h2>TuringWash</h2>
      <p className="subtitle">Faça o login.</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nome Usuário" 
          onChange={(e) => setNome_usuario(e.target.value)} 
          value={nome_usuario || ""}
        />
        <input 
          type="text" 
          placeholder="Senha" 
          onChange={(e) => setSenha(e.target.value)} 
          value={senha || ""}
        />
        {!loading && <input type="submit" value="Entrar" />}
        {loading && <input type="submit" value="Aguarde..." disabled/>}
        {error && <Message msg={error} type="error"/>}
      </form>
      <p className="click">
        Não tem uma conta ? <Link to="/register">Clique aqui</Link>
      </p>
    </div>
  )
}

export default Login