import Botoes from "../Botoes";
import Campos from "../Campos";
import Slider from "../Slider";
import Titulo from "../Titulo";

import { logout, reset } from "../../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { insertProduto, resetMessage } from "../../slices/produtoSlice";
import { useState } from "react";
import Message from "../Message/Message";

function CadastroProduto() {
  const { auth } = useAuth();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    return <Navigate to="/login" />;
  };

  const { loading } = useSelector((state) => state.usuario);
  const {
    loading: loadingProduto,
    message,
    error,
  } = useSelector((state) => state.produto);

  const [descricao_produto, setDescricao_produto] = useState("");
  const [id_tabela, setId_tabela] = useState("");
  const [id_categoria, setId_categoria] = useState("");

  const resetComponentMessage = () => {
    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);
  };

  const submitHandle = (e) => {
    e.preventDefault();

    const produto = {
      descricao_produto,
      id_tabela,
      id_categoria
    };

    dispatch(insertProduto(produto));

    setDescricao_produto("");
    setId_tabela("");
    setId_categoria("");

    resetComponentMessage();
  };

  const clearInputs = (e) => {
    e.preventDefault();
    setDescricao_produto("");
    setId_tabela("");
    setId_categoria("");
    dispatch(resetMessage()); // Adicione esta linha
  };
  

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="bg-gradient-to-r from-black to-green-500 w-screen h-screen">
      <Slider />
      <form onSubmit={submitHandle}>
        <div className="flex justify-center">
          <div className="bg-neutral-500 w-11/12 h-[500px] mt-8 rounded-lg border-2 border-black">
            <Titulo label="Produtos" />
            <div className="w-full h-[370px]">
              {auth && (
                <span
                  className="bg-green-500 texx-center m-auto"
                  onClick={handleLogout}
                >
                  Sair
                </span>
              )}
              <div className="grid grid-rows-3 grid-cols-4 grid-flow-col gap-x-[45rem]">
                <div className="grid grid-row-1 grid-cols-2 content-center p-6 gap-x-60">
                  <div className="w-[240px]">
                    <label className="text-3xl text-white font-bold campo">
                      Descrição Produto
                    </label>
                  </div>
                  <input
                    className="bg-white rounded-xl w-[350px] h-10 p-2 shadow-md shadow-black"
                    type="text"
                    placeholder="Insira a descrição produto"
                    onChange={(e) => setDescricao_produto(e.target.value)}
                    value={descricao_produto || ""}
                  />
                </div>
                <div className="grid grid-row-1 grid-cols-2 content-center p-6 gap-x-60">
                  <div className="w-[240px]">
                    <label className="text-3xl text-white font-bold campo">
                      ID Tabela
                    </label>
                  </div>
                  <input
                    className="bg-white rounded-xl w-[350px] h-10 p-2 shadow-md shadow-black"
                    type="text"
                    placeholder="Insira o ID Tabela"
                    onChange={(e) => setId_tabela(e.target.value)}
                    value={id_tabela || ""}
                  />
                </div>
                <div className="grid grid-row-1 grid-cols-2 content-center p-6 gap-x-60">
                  <div className="w-[240px]">
                    <label className="text-3xl text-white font-bold campo">
                      ID Categoria
                    </label>
                  </div>
                  <input
                    className="bg-white rounded-xl w-[350px] h-10 p-2 shadow-md shadow-black"
                    type="text"
                    placeholder="Insira o ID Categoria"
                    onChange={(e) => setId_categoria(e.target.value)}
                    value={id_categoria || ""}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-end justify-evenly">
              {!loadingProduto && <button type="submit" className="border-2 border-black bg-lime-600 rounded-2xl w-60 flex justify-center h-10">
                <div className="text-white text-2xl p-0.5">
                  Cadastrar
                </div>
              </button>}
              {loadingProduto && <button type="submit" className="border-2 border-black bg-lime-600 rounded-2xl w-60 flex justify-center h-10">
                <div className="text-white text-2xl p-0.5">
                  Aguarde...
                </div>
              </button>}
              <button className="border-2 border-black bg-red-600 rounded-2xl w-60 flex justify-center">
                <div className="text-white text-2xl p-0.5" onClick={clearInputs}>Cancelar</div>
              </button>
            </div>
          </div>
        </div>
      </form>
      {error && <Message msg={error} type="error"/>}
      {message && <Message msg={message} type="success"/>}
    </div>
  );
}

export default CadastroProduto;
