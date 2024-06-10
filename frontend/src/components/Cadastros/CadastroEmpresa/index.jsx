import { useEffect, useState } from "react";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import HeaderCadsatro from "../HeaderCadastro";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate, useLocation } from "react-router-dom";
import { insertEmpresa, updateEmpresa, resetMessage } from "../../../slices/empresaSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAllCidades } from "../../../slices/cidadeSlice";
import Message from "../../Message/Message";

export default function CadastroEmpresa() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { loading } = useSelector((state) => state.usuario);
  const { cidades } = useSelector((state) => state.cidade);

  const {
    message,
    error,
  } = useSelector((state) => state.empresa);

  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [id_cidade, setId_cidade] = useState(null);
  const [cidadeSelecionada, setCidadeSelecionada] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    dispatch(getAllCidades());
  }, [dispatch]);

  useEffect(() => {
    if (location.state && location.state.empresa) {
      const { empresa } = location.state;
      setNome(empresa.nome);
      setCnpj(empresa.cnpj)
      setId_cidade(empresa.id_cidade);
      const cidade = cidades.find(cidade => cidade.id_cidade === empresa.id_cidade);
      setCidadeSelecionada(cidade || null);
      setIsEdit(true);
    } else {
      // Reset to insertion mode if no fornecedor in location state
      setNome("");
      setCnpj("");
      setId_cidade(null);
      setCidadeSelecionada(null);
      setIsEdit(false);
    }
  }, [location.state, cidades]);

  const resetComponentMessage = () => {
    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);
  };

  const submitHandle = (e) => {
    e.preventDefault();

    const empresa = {
      nome,
      cnpj,
      id_cidade
    };

    if (isEdit) {
      dispatch(updateEmpresa({ ...empresa, id_empresa: location.state.empresa.id_empresa }))
        .then(() => {
          resetComponentMessage();
          navigate("/EmpresaUpdate");
        });
    } else {
      dispatch(insertEmpresa(empresa))
        .then(() => {
          resetComponentMessage();
        });
    }

    setNome("");
    setCnpj("")
    setId_cidade(null);
    setCidadeSelecionada(null);
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <GradientWrapper>
      <HeaderCadsatro label="CADASTRO DE EMPRESA" />
      <div className="flex justify-center items-center mt-14">
        {/* formulario */}
        <form onSubmit={submitHandle} className="flex flex-col gap-4 w-full max-w-md px-4">
          {/* nome do fornecedor */}
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="nome_empresa" className="text-white font-bold">
              NOME:
            </Label>
            <Input
              type="text"
              id="nome_empresa"
              placeholder="Escreva o nome da empresa"
              className="w-full"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          {/* nome da cidade */}
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="cidade" className="text-white font-bold">
              CIDADE:
            </Label>
            <Autocomplete
              id="cidade"
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
                    placeholder="Digite a cidade"
                  />
                </div>
              )}
            />
          </div>
          {/* cnpj do fornecedor */}
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="cnpj" className="text-white font-bold">
              CNPJ:
            </Label>
            <Input
              type="number"
              id="cnpj"
              placeholder="Escreva o CNPJ aqui (apenas números)"
              className="w-full"
              value={cnpj}
              minLength={14}
              maxLength={14}
              onChange={(e) => {
                if (e.target.value.length <= 14) {
                  setCnpj(e.target.value);
                }
              }}
            />
          </div>
          {/* botao */}
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