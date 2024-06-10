import { useState, useEffect } from "react";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import HeaderCadsatro from "../HeaderCadastro";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate, useLocation } from "react-router-dom";
import { insertFornecedor, updateFornecedor, resetMessage } from "../../../slices/fornecedorSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAllCidades } from "../../../slices/cidadeSlice";
import Message from "../../Message/Message";

export default function CadastroFornecedor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { loading } = useSelector((state) => state.usuario);
  const { cidades } = useSelector((state) => state.cidade);

  const {
    loading: loadingFornecedor,
    message,
    error,
  } = useSelector((state) => state.fornecedor);

  const [nome_fornecedor, setNome_fornecedor] = useState("");
  const [id_cidade, setId_cidade] = useState(null);
  const [cidadeSelecionada, setCidadeSelecionada] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    dispatch(getAllCidades());
  }, [dispatch]);

  useEffect(() => {
    if (location.state && location.state.fornecedor) {
      const { fornecedor } = location.state;
      setNome_fornecedor(fornecedor.nome_fornecedor);
      setId_cidade(fornecedor.id_cidade);
      const cidade = cidades.find(cidade => cidade.id_cidade === fornecedor.id_cidade);
      setCidadeSelecionada(cidade || null);
      setIsEdit(true);
    } else {
      // Reset to insertion mode if no fornecedor in location state
      setNome_fornecedor("");
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

    const fornecedor = {
      nome_fornecedor,
      id_cidade
    };

    if (isEdit) {
      dispatch(updateFornecedor({ ...fornecedor, id_fornecedor: location.state.fornecedor.id_fornecedor }))
        .then(() => {
          resetComponentMessage();
          navigate("/FornecedorUpdate");
        });
    } else {
      dispatch(insertFornecedor(fornecedor))
        .then(() => {
          resetComponentMessage();
        });
    }

    setNome_fornecedor("");
    setId_cidade(null);
    setCidadeSelecionada(null);
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <GradientWrapper>
      <HeaderCadsatro label={isEdit ? "EDITAR FORNECEDOR" : "CADASTRO DE FORNECEDOR"} />
      <div className="flex justify-center items-center mt-14">
        <form onSubmit={submitHandle} className="flex flex-col gap-4 w-full max-w-md px-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="nome_fornecedor" className="text-white font-bold">
              NOME:
            </Label>
            <Input
              type="text"
              id="nome_fornecedor"
              placeholder="Escreva o nome do fornecedor"
              className="w-full"
              value={nome_fornecedor}
              onChange={(e) => setNome_fornecedor(e.target.value)}
            />
          </div>
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
