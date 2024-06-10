import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import HeaderCadsatro from "../HeaderCadastro";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Autocomplete from "@mui/material/Autocomplete";
import * as React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Message from "../../Message/Message";
import { insertUsuario, resetMessage, updateUsuario } from "../../../slices/usuarioSlice";
import { getAllPerfils } from "../../../slices/perfilSlice";
import { getAllEmpresas } from "../../../slices/empresaSlice";
import { useLocation, useNavigate } from "react-router-dom";

export default function CadastroUsuario() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { empresas } = useSelector((state) => state.empresa);
  const { perfils } = useSelector((state) => state.perfil);

  const {
    loading,
    message,
    error,
  } = useSelector((state) => state.usuario);

  const [nome_usuario, setNome_usuario] = useState("");
  const [id_perfil, setId_perfil] = useState("");
  const [comissao, setComissao] = useState("");
  const [senha, setSenha] = useState("");
  const [id_empresa, setId_empresa] = useState("");
  const [perfilSelecionado, setPerfilSelecionado] = useState(null);
  const [empresaSelecionada, setEmpresaSelecionada] = useState(null); // Adicionando tabelaSelecionada
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    dispatch(getAllPerfils())
    dispatch(getAllEmpresas())
  }, [dispatch])

  useEffect(() => {
    if (location.state && location.state.usuario) {
      const { usuario } = location.state;
      setNome_usuario(usuario.nome_usuario);
      setId_perfil(usuario.id_perfil);
      setId_empresa(usuario.id_empresa); // Configurando id_empresa
      setComissao(usuario.comissao);
      setSenha(usuario.senha);
      const perfil = perfils.find(perfil => perfil.id_perfil === usuario.id_perfil);
      const empresa = empresas.find(empresa => empresa.id_empresa === usuario.id_empresa); // Configurando tabela
      setPerfilSelecionado(perfil || null);
      setEmpresaSelecionada(empresa || null); // Configurando tabelaSelecionada
      setIsEdit(true);
    } else {
      // Reset to insertion mode if no fornecedor in location state
      setNome_usuario("");
      setId_perfil(null);
      setId_empresa(null); // Reset Id_empresa
      setComissao(null)
      setSenha(null)
      setPerfilSelecionado(null);
      setEmpresaSelecionada(null); // Reset tabelaSelecionada
      setIsEdit(false);
    }
  }, [location.state, empresas, perfils]);

  const resetComponentMessage = () => {
    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);
  };

  const submitHandle = (e) => {
    e.preventDefault();

    const usuario = {
      nome_usuario,
      id_perfil,
      comissao,
      senha,
      id_empresa,
    };

    if (isEdit) {
      dispatch(updateUsuario({ ...usuario, id_usuario: location.state.usuario.id_usuario }))
        .then(() => {
          resetComponentMessage();
          navigate("/UsuarioUpdate");
        });
    } else {
      dispatch(insertUsuario(usuario))
        .then(() => {
          resetComponentMessage();
        });
    }

    setNome_usuario("");
    setId_perfil("");
    setComissao("");
    setSenha("");
    setId_empresa("");
    setPerfilSelecionado(null)
    setEmpresaSelecionada(null)
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <GradientWrapper>
      <HeaderCadsatro label={isEdit ? "EDITAR USUÁRIO" : "CADASTRO DE USUÁRIO"} />
      <div className="flex justify-center items-center mt-3">
        <form onSubmit={submitHandle} className="flex flex-col gap-4 w-full md:w-96">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nome" className="text-white font-bold">
              NOME:
            </Label>
            <Input
              type="text"
              id="nome_usuario"
              placeholder="Escreva o nome do usuário"
              onChange={(e) => setNome_usuario(e.target.value)}
              value={nome_usuario || ""}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="senha" className="text-white font-bold">
              SENHA:
            </Label>
            <Input
              type="password"
              id="senha_usuario"
              placeholder="Cadastre uma senha"
              onChange={(e) => setSenha(e.target.value)}
              value={senha || ""}
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="perfil_usuario" className="text-white font-bold">
              PERFIL USUARIO:{" "}
              <Autocomplete
                id="id_perfil"
                options={perfils}
                getOptionLabel={(option) => option.descricao}
                value={perfilSelecionado}
                isOptionEqualToValue={(option, value) => option.id_perfil === value?.id_perfil}
                onChange={(event, newValue) => {
                  setPerfilSelecionado(newValue);
                  setId_perfil(newValue ? newValue.id_perfil : null);
                }}
                renderInput={(params) => (
                  <div ref={params.InputProps.ref}>
                    <input
                      type="text"
                      {...params.inputProps}
                      className="flex h-10 w-full rounded-md border border-neutral-200
                    bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
                    file:text-sm file:font-medium placeholder:text-neutral-500 
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
                    focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
                     dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                      dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                      text-black mt-1 font-normal font-sm"
                      placeholder="Selecione o perfil"
                    />
                  </div>
                )}
              />
            </Label>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="comissao" className="text-white font-bold">
              COMISSÃO:
            </Label>
            <Input
              type="number"
              id="comissao"
              placeholder="Escreva o valor da comissão... EX: (10%)"
              onChange={(e) => setComissao(e.target.value)}
              value={comissao || ""}
              min={1}
              max={100}
            />
          </div>
          <div>
            <label className="text-white font-bold">
              EMPRESA:{" "}
              <Autocomplete
                id="id_empresa"
                options={empresas}
                getOptionLabel={(option) => option.nome}
                value={empresaSelecionada}
                isOptionEqualToValue={(option, value) => option.id_empresa === value?.id_empresa}
                onChange={(event, newValue) => {
                  setEmpresaSelecionada(newValue);
                  setId_empresa(newValue ? newValue.id_empresa : null);
                }}
                renderInput={(params) => (
                  <div ref={params.InputProps.ref}>
                    <input
                      type="text"
                      {...params.inputProps}
                      className="flex h-10 w-full rounded-md border border-neutral-200
                    bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
                    file:text-sm file:font-medium placeholder:text-neutral-500 
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
                    focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
                     dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                      dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                      text-black mt-1 font-normal font-sm"
                      placeholder="Selecione a empresa"
                    />
                  </div>
                )}
              />
            </label>
          </div>
          <div className="flex justify-center">
          {!loading && <button className="text-white bg-black font-bold w-[200px] h-[40px] rounded-xl">
              Cadastrar
            </button>}
            {loading && <button className="text-white bg-black font-bold w-[200px] h-[40px] rounded-xl">
              Aguarde...
            </button>}
          </div>
          {/* {message && (
            <div className="mt-4 lg:mt-12 p-2 bg-green-500 text-white rounded font-bold text-center">
              {message}
            </div>
          )} */}
        </form>
      </div>
      {error && <Message msg={error} type="error"/>}
      {message && <Message msg={message} type="success"/>}
      <BarMenu />
    </GradientWrapper>
  );
}
