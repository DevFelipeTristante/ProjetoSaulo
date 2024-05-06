import "./Auth.css"

// Components
import {Link} from "react-router-dom"

// Hooks
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// Redux
import { register, reset } from "../../slices/authSlice"
import Message from "../../components/Message/Message"

const Register = () => {
  const [nome_usuario, setNome_usuario] = useState("")
  const [id_perfil, setId_perfil] = useState("")
  const [comissao, setComissao] = useState("")
  const [senha, setsenha] = useState("")
  const [confirmSenha, setConfirmsenha] = useState("")

  const dispatch = useDispatch()

  const { loading, error } = useSelector((state) => state.auth) 

  const handleSubmit = (e) => {
    e.preventDefault()

    const usuario = {
      nome_usuario,
      id_perfil,
      comissao,
      senha,
      confirmSenha
    }

    console.log(usuario)

    dispatch(register(usuario))
  }

  // Clean all auth states
  useEffect(() => {
    dispatch(reset())
  }, [dispatch])

  return (
    <div id="register">
      <h2>TuringWash</h2>
      <p className="subtitle">Cadastre-se para acessar nossos serviços.</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nome do usuário" 
          onChange={(e) => setNome_usuario(e.target.value)} 
          value={nome_usuario || ""} 
        />
        <input 
          type="number" 
          placeholder="ID Perfil" 
          onChange={(e) => setId_perfil(e.target.value)} 
          value={id_perfil || ""} 
        />
        <input 
          type="text" 
          placeholder="Comissão" 
          onChange={(e) => setComissao(e.target.value)} 
          value={comissao || ""} 
        />
        <input 
          type="password" 
          placeholder="Senha" 
          onChange={(e) => setsenha(e.target.value)} 
          value={senha || ""}  
        />
        <input 
          type="password" 
          placeholder="Confirme a senha" 
          onChange={(e) => setConfirmsenha(e.target.value)} 
          value={confirmSenha || ""}  
        />
        {!loading && <input type="submit" value="Cadastrar" />}
        {loading && <input type="submit" value="Aguarde..." disabled/>}
        {error && <Message msg={error} type="error"/>}
      </form>
      <p className="click">
        Já tem conta? <Link to="/login">Clique aqui</Link>
      </p>
    </div>
  )
}

export default Register