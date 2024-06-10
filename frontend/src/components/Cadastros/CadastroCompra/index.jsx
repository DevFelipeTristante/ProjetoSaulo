import { useEffect, useState } from "react";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import HeaderCadsatro from "../HeaderCadastro";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate, useLocation } from "react-router-dom";
import { insertCompra, updateCompra, resetMessage } from "../../../slices/compraSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAllProdutos } from "../../../slices/produtoSlice";
import Message from "../../Message/Message";

export default function CadastroCompra() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { loading } = useSelector((state) => state.usuario);
  const { produtos } = useSelector((state) => state.produto);

  const {
    message,
    error,
  } = useSelector((state) => state.compra);

  const [numeroNF, setNumeroNF] = useState("");
  const [valor, setValor] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [data_nf, setDataNF] = useState("");
  const [id_produto, setId_produto] = useState(null);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    dispatch(getAllProdutos());
  }, [dispatch]);

  useEffect(() => {
    if (location.state && location.state.compra) {
      const { compra } = location.state;
      setNumeroNF(compra.numeroNF);
      setValor(compra.valor);
      setQuantidade(compra.quantidade);
      setDataNF(compra.data_nf);
      setId_produto(compra.id_produto);
      const produto = produtos.find(produto => produto.id_produto === compra.id_produto);
      setProdutoSelecionado(produto || null);
      setIsEdit(true);
    } else {
      // Reset to insertion mode if no fornecedor in location state
      setNumeroNF("");
      setValor("");
      setQuantidade("");
      setDataNF("");
      setId_produto(null);
      setProdutoSelecionado(null);
      setIsEdit(false);
    }
  }, [location.state, produtos]);

  const resetComponentMessage = () => {
    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);
  };

  const submitHandle = (e) => {
    e.preventDefault();

    const compra = {
      numeroNF,
      valor,
      quantidade,
      data_nf,
      id_produto
    };

    if (isEdit) {
      dispatch(updateCompra({ ...compra, numeroNF: location.state.compra.numeroNF }))
        .then(() => {
          resetComponentMessage();
          navigate("/CompraUpdate");
        });
    } else {
      dispatch(insertCompra(compra))
        .then(() => {
          resetComponentMessage();
        });
    }

    setNumeroNF("");
    setValor("")
    setQuantidade("")
    setDataNF("")
    setId_produto(null);
    setProdutoSelecionado(null);
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <GradientWrapper>
      <HeaderCadsatro label="CADASTRO DE COMPRA PRODUTO" />
      <div className="flex justify-center items-center mt-8">
        {/* formulario */}
        <form onSubmit={submitHandle} className="flex flex-col gap-4 w-full max-w-md px-4">
          {/* nome do fornecedor */}
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="numeroNF" className="text-white font-bold">
              NÚMERO NOTA FISCAL:
            </Label>
            <Input
              type="number"
              id="numeroNF"
              placeholder="Escreva o número da nota fiscal"
              className="w-full"
              value={numeroNF}
              minLength={9}
              maxLength={9}
              onChange={(e) => {
                if (e.target.value.length <= 9) {
                  setNumeroNF(e.target.value);
                }
              }}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="valor" className="text-white font-bold">
              VALOR:
            </Label>
            <Input
              type="text"
              id="valor"
              placeholder="Escreva o valor da nota"
              className="w-full"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="quantidade" className="text-white font-bold">
              QUANTIDADE:
            </Label>
            <Input
              type="text"
              id="quantidade"
              placeholder="Escreva a quantidade de produto"
              className="w-full"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="data_nf" className="text-white font-bold">
              DATA NOTA FISCAL:
            </Label>
            <Input
              type="date"
              id="data_nf"
              placeholder="Escreva a data da nota"
              className="w-full"
              value={data_nf}
              onChange={(e) => setDataNF(e.target.value)}
            />
          </div>
          {/* nome da cidade */}
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="id_produto" className="text-white font-bold">
              PRODUTO:
            </Label>
            <Autocomplete
              id="id_produto"
              options={produtos}
              getOptionLabel={(option) => option.descricao_produto}
              value={produtoSelecionado}
              isOptionEqualToValue={(option, value) => option.id_produto === value?.id_produto}
              onChange={(event, newValue) => {
                setProdutoSelecionado(newValue);
                setId_produto(newValue ? newValue.id_produto : null);
              }}
              renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                  <input
                    type="text"
                    {...params.inputProps}
                    className="flex h-10 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 text-black mt-1 font-normal"
                    placeholder="Escreva o produto"
                  />
                </div>
              )}
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