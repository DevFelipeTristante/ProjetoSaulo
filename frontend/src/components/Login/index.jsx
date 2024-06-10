import GradientWrapper from "../GradientWrapper";
import LogoClothing from "../../assets/imgs/logo.png";
import { useNavigate } from "react-router-dom";

// Components
import { Link } from "react-router-dom"
import Message from "../../components/Message/Message"

// Hooks
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

// Redux
import { login, reset } from "../../slices/authSlice"

export default function Login() {

  const navigate = useNavigate()

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

  const cadastrarUsuario = () => {
    navigate("/cadastroUsuario")
  }
  return (
    <GradientWrapper>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center gap-5">
          <img src={LogoClothing} className="w-[23rem]" />
          <div className="flex flex-col ml-4">
            <label className="text-white font-bold">Usuário</label>
            <input type="text" id="usuario" className="p-1 rounded-3xl w-[230px]" onChange={(e) => setNome_usuario(e.target.value)} value={nome_usuario || ""} />
          </div>
          <div className="flex flex-col ml-4">
            <label className="text-white font-bold">Senha</label>
            <input type="password" id="senha" className="p-1 rounded-3xl w-[230px]" onChange={(e) => setSenha(e.target.value)} value={senha || ""} />
          </div>
          <div className="flex gap-x-2">
            {!loading && <button className="text-white mr-10 bg-second-color rounded-3xl font-bold w-[110px] p-2 ml-[3.8rem]">
              Entrar
            </button>}
            
          </div>
          {error && <Message msg={error} type="error" />} 
        </div>
        
      </form>
      
    </GradientWrapper>
  );
}
