import React, { useState, useEffect } from "react";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import HeaderCadastro from "../HeaderCadastro";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Autocomplete from "@mui/material/Autocomplete";
import { getAllClientes } from "../../../slices/clienteSlice";
import { insertTelefone, updateTelefone, resetMessage } from "../../../slices/telefoneSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Message from "../../Message/Message";

export default function CadastroTelefone() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { loading } = useSelector((state) => state.usuario);
  const { clientes } = useSelector((state) => state.cliente);

  const {
    message,
    error,
  } = useSelector((state) => state.telefone);

  const [id_cliente, setId_cliente] = useState("");
  const [clienteSelecionado, setClienteSelecionado] = useState("");
  const [numero, setNumero] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    dispatch(getAllClientes());
  }, [dispatch]);

  useEffect(() => {
    if (location.state && location.state.telefone) {
      const { telefone } = location.state;
      setNumero(telefone.numero)
      setId_cliente(telefone.id_cliente);
      const cliente = clientes.find(cliente => cliente.id_cliente === telefone.id_cliente);
      setClienteSelecionado(cliente || null);
      setIsEdit(true);
    } else {
      setNumero("");
      setId_cliente(null);
      setClienteSelecionado(null);
      setIsEdit(false);
    }
  }, [location.state, clientes]);

  const resetComponentMessage = () => {
    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);
  };

  // Função para formatar o número de telefone
  const formatPhoneNumber = (phoneNumber) => {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);
    if (match) {
      return `(${match[1]})${match[2]}-${match[3]}`;
    }
    return phoneNumber;
  };

  const submitHandle = (e) => {
    e.preventDefault();

    const telefone = {
      id_cliente,
      numero: formatPhoneNumber(numero) // Formatando o número antes de enviar
    };

    if (isEdit) {
      dispatch(updateTelefone({ ...telefone, id_telefone: location.state.telefone.id_telefone }))
        .then(() => {
          resetComponentMessage();
          navigate("/TelefoneUpdate");
        });
    } else {
      dispatch(insertTelefone(telefone))
        .then(() => {
          resetComponentMessage();
        });
    }

    setId_cliente(null);
    setNumero("");
    setClienteSelecionado(null);
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <GradientWrapper>
      <HeaderCadastro label={isEdit ? "EDITAR TELEFONE" : "CADASTRO DE TELEFONE"} />
      <div className="flex justify-center items-center mt-14">
        <form onSubmit={submitHandle} className="flex flex-col gap-4 w-96">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="id_cliente" className="text-white font-bold">
              CLIENTE:
            </Label>
            <Autocomplete
              id="id_cliente"
              options={clientes}
              getOptionLabel={(option) => option ? option.nome_cliente : ''}
              value={clienteSelecionado}
              isOptionEqualToValue={(option, value) => option.id_cliente === value?.id_cliente}
              onChange={(event, newValue) => {
                setClienteSelecionado(newValue);
                setId_cliente(newValue ? newValue.id_cliente : null);
              }}
              renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                  <input
                    type="text"
                    {...params.inputProps}
                    className="flex h-10 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 text-black mt-1 font-normal"
                    placeholder="Digite o nome do cliente"
                  />
                </div>
              )}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nome" className="text-white font-bold">
              TELEFONE:
            </Label>
            <Input
              type="text"
              id="telefone"
              placeholder="Escreva o número do telefone"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="text-white bg-black font-bold w-full max-w-xs h-10 rounded-xl">
              {isEdit ? "Atualizar" : "Confirmar"}
            </button>
          </div>
        </form>
      </div>
      {error && <Message msg={error} type="error" />}
      {message && <Message msg={message} type="success" />}
      <BarMenu />
    </GradientWrapper>
  );
}
