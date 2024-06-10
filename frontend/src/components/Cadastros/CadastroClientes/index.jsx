import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import HeaderCadsatro from "../HeaderCadastro";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Autocomplete from "@mui/material/Autocomplete";
import * as React from "react";

import { useDispatch, useSelector } from "react-redux";
import { insertCliente, resetMessage, updateCliente } from "../../../slices/clienteSlice";
import { useEffect, useState } from "react";
import Message from "../../Message/Message";
import { getAllTipos } from "../../../../../frontend/src/slices/tipoSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCidades } from "../../../slices/cidadeSlice";

export default function cadastroCliente() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { loading } = useSelector((state) => state.usuario);
  const { tipos } = useSelector((state) => state.tipo);
  const { cidades } = useSelector((state) => state.cidade);

  const {
    message,
    error,
  } = useSelector((state) => state.cliente);

  const [nome_cliente, setNome_cliente] = useState("");
  const [id_tipo, setId_tipo] = useState("");
  const [id_cidade, setId_cidade] = useState(""); // Adicionando Id_cidade
  const [endereco, setEndereco] = useState("");
  const [tipoSelecionado, setTipoSelecionado] = useState(null);
  const [cidadeSelecionada, setCidadeSelecionada] = useState(null); // Adicionando CidadeSelecionada
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    dispatch(getAllTipos())
    dispatch(getAllCidades())
  }, [dispatch])

  useEffect(() => {
    if (location.state && location.state.cliente) {
      const { cliente } = location.state;
      setNome_cliente(cliente.nome_cliente);
      setId_tipo(cliente.id_tipo);
      setId_cidade(cliente.id_cidade); // Configurando id_cidade
      setEndereco(cliente.endereco);
      const tipo = tipos.find(tipo => tipo.id_tipo === cliente.id_tipo);
      const cidade = cidades.find(cidade => cidade.id_cidade === cliente.id_cidade); // Configurando tabela
      setTipoSelecionado(tipo || null);
      setCidadeSelecionada(cidade || null); // Configurando CidadeSelecionada
      setIsEdit(true);
    } else {
      // Reset to insertion mode if no fornecedor in location state
      setNome_cliente("");
      setId_tipo(null);
      setId_cidade(null); // Reset Id_cidade
      setEndereco(null)
      setTipoSelecionado(null);
      setCidadeSelecionada(null); // Reset CidadeSelecionada
      setIsEdit(false);
    }
  }, [location.state, tipos, cidades]);

  const resetComponentMessage = () => {
    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);
  };

  const submitHandle = (e) => {
    e.preventDefault();

    const cliente = {
      nome_cliente,
      id_tipo,
      id_cidade, // Incluindo id_cidade
      endereco
    };

    if (isEdit) {
      dispatch(updateCliente({ ...cliente, id_cliente: location.state.cliente.id_cliente }))
        .then(() => {
          resetComponentMessage();
          navigate("/ClienteUpdate");
        });
    } else {
      dispatch(insertCliente(cliente))
        .then(() => {
          resetComponentMessage();
        });
    }

    setNome_cliente("");
    setId_tipo(null);
    setId_cidade(null); // Reset Id_cidade
    setEndereco("");
    setTipoSelecionado(null);
    setCidadeSelecionada(null); // Reset CidadeSelecionada
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <GradientWrapper>
      <HeaderCadsatro label={isEdit ? "EDITAR CLIENTE" : "CADASTRO DE CLIENTE"} />
      <div className="flex justify-center items-center mt-10  ">
        {/* Formulario */}
        <form onSubmit={submitHandle} className="flex flex-col gap-4 w-96">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nome_cliente" className="text-white font-bold">
              NOME:
            </Label>
            <Input
              type="text"
              id="nome_cliente"
              placeholder="Escreva o nome do cliente"
              onChange={(e) => setNome_cliente(e.target.value)}
              value={nome_cliente || ""}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="endereco" className="text-white font-bold">
              ENDEREÇO:
            </Label>
            <Input
              type="text"
              id="endereco"
              placeholder="Informe o endereço do cliente"
              onChange={(e) => setEndereco(e.target.value)}
              value={endereco || ""}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <>
              <label className="text-white font-bold text-sm">
                CIDADE:{" "}
                <Autocomplete
                  id="id_cidade"
                  options={cidades}
                  getOptionLabel={(option) => option.nome_cidade}
                  value={cidadeSelecionada}
                  isOptionEqualToValue={(option, value) => option.id_cidade === value?.id_cidade}
                  onChange={(event, newValue) => {
                    setCidadeSelecionada(newValue);
                    setId_cidade(newValue ? newValue.id_cidade : null);
                  }}
                  renderInput={(params) => (
                    <div ref={params.InputProps.ref}>
                      <input
                        type="text"
                        {...params.inputProps}
                        className="flex h-10 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 text-black mt-1 font-normal"
                        placeholder="Digite a categoria"
                      />
                    </div>
                  )}
                />
              </label>
            </>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
            <>
              <label className="text-white font-bold text-sm">
                TIPO CLIENTE:{" "}
                <Autocomplete
                  id="id_tipo"
                  options={tipos}
                  getOptionLabel={(option) => option.tipo_cliente}
                  value={tipoSelecionado}
                  isOptionEqualToValue={(option, value) => option.id_tipo === value?.id_tipo}
                  onChange={(event, newValue) => {
                    setTipoSelecionado(newValue);
                    setId_tipo(newValue ? newValue.id_tipo : null);
                  }}
                  renderInput={(params) => (
                    <div ref={params.InputProps.ref}>
                      <input
                        type="text"
                        {...params.inputProps}
                        className="flex h-10 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 text-black mt-1 font-normal"
                        placeholder="Digite a categoria"
                      />
                    </div>
                  )}
                />
              </label>
            </>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center">
              <button type="submit" className="text-white bg-black font-bold w-full max-w-xs h-10 rounded-xl">
                {isEdit ? "Atualizar" : "Confirmar"}
              </button>
            </div>
          </div>
        </form>
      </div>
      {error && <Message msg={error} type="error" />}
      {message && <Message msg={message} type="success" />}
      <BarMenu />
    </GradientWrapper>
  );
}