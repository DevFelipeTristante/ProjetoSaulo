import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import HeaderCadsatro from "../HeaderCadastro";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useDispatch, useSelector } from "react-redux";
import { insertCidade, resetMessage } from "../../../slices/cidadeSlice";
import { useEffect, useState } from "react";
import Message from "../../Message/Message";

export default function CadastroCidade() {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.usuario);
  const {
    loading: loadingCidade,
    message,
    error,
  } = useSelector((state) => state.cidade);

  const [nome_cidade, setNome_cidade] = useState("");
  const [estado_cidade, setEstado_cidade] = useState("");

  const resetComponentMessage = () => {
    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);
  };

  const submitHandle = (e) => {
    e.preventDefault();

    const cidade = {
      nome_cidade,
      estado_cidade
    };

    dispatch(insertCidade(cidade));

    setNome_cidade("");
    setEstado_cidade("");

    resetComponentMessage();
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <GradientWrapper>
      <HeaderCadsatro label="CADASTRO DE CIDADE" />
      <div className="flex justify-center items-center mt-14">
        <form onSubmit={submitHandle} className="flex flex-col gap-4 w-96">
          {/* nome da cidade */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nome" className="text-white font-bold">
              NOME:
            </Label>
            <Input
              type="text"
              id="nome_cidade"
              placeholder="Escreva o nome da cidade"
              onChange={(e) => setNome_cidade(e.target.value)}
              value={nome_cidade || ""}
            />
          </div>
          {/* estado */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nome" className="text-white font-bold">
              ESTADO/UF:
            </Label>
            <Input type="text" id="estado" placeholder="Escreva o estado" onChange={(e) => setEstado_cidade(e.target.value)} value={estado_cidade || ""} />
          </div>
          <div className="flex justify-center">
            {!loadingCidade && <button className="text-white bg-black font-bold w-[200px] h-[40px] rounded-xl">
              Cadastrar
            </button>}
            {loadingCidade && <button className="text-white bg-black font-bold w-[200px] h-[40px] rounded-xl">
              Aguarde...
            </button>}
          </div>
        </form>
      </div>
      {error && <Message msg={error} type="error"/>}
      {message && <Message msg={message} type="success"/>}
      <BarMenu />
    </GradientWrapper>
  );
}
