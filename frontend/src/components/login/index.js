import React from "react";
import logo from "../../imgs/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons"; // Caminho relativo

// Components
import { Link } from "react-router-dom"
import Message from "../../components/Message/Message"

// Hooks
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

// Redux
import { login, reset } from "../../slices/authSlice"

function Login() {
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
    <div className="bg-gradient-to-r from-black to-green-500 w-screen h-screen">
      <div className="flex justify-around p-36">
        {/* logo */}
        <img
          src={logo}
          alt="Logo da XYZ Distribuidora"
          className="w-72 h-48 border-2 border-black"
        />
        {/* card cadastro */}
        <form onSubmit={handleSubmit}>
        <div className="w-80 h-96 bg-gradient-to-t from-blue-950 to-green-500 border-2 border-black">
          <div className="flex flex-col gap-y-4">
            <FontAwesomeIcon icon={faCircleUser} className="text-9xl" />
            {/* Campos login */}
            <div className="flex justify-center">
              <div className="flex flex-col gap-4 w-10/12">
                  <div className="flex justify-center items-center">
                    <div className="bg-slate-400 p-4">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <input type="text" 
                      placeholder="Nome Usuário" 
                      onChange={(e) => setNome_usuario(e.target.value)} 
                      value={nome_usuario || ""} className="p-4" 
                    />
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-slate-400 p-4">
                      <FontAwesomeIcon icon={faLock} />
                    </div>
                    <input type="text" 
                      placeholder="Senha" 
                      onChange={(e) => setSenha(e.target.value)} 
                      value={senha || ""}
                      className="p-4" 
                    />
                  </div>
                <div className="flex justify-around">
                  <div className="flex items-center gap-x-0.5">
                    <input type="checkbox" className="w-4 h-4" />
                    <label className="text-white text-sm">Remember me</label>
                  </div>
                  <label className="text-white text-sm">Forget passowrd?</label>
                </div>
              </div>
            </div>
            {/* botao login */}
            <div className="flex justify-center">
              <button className="text-white">
                <div className="flex justify-center bg-green-400 w-60 p-2">
                  {!loading && <input type="submit" value="Login" />}
                  {loading && <input type="submit" value="Aguarde..." disabled/>}
                  {error && <Message msg={error} type="error"/>}
                </div>
              </button>
            </div>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
