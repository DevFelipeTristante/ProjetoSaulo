import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import HeaderCadsatro from "../HeaderCadastro";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Autocomplete from "@mui/material/Autocomplete";

import { useDispatch, useSelector } from "react-redux";
import { insertProduto, resetMessage } from "../../../slices/produtoSlice";
import { useEffect, useState } from "react";
import Message from "../../Message/Message";
import { getAllCategorias } from "../../../../../frontend/src/slices/categoriaSlice";


export default function CadastroProduto() {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.usuario);
  const {
    loading: loadingProduto,
    message,
    error,
  } = useSelector((state) => state.produto);

  const { categorias } = useSelector((state) => state.categoria);

  useEffect(() => {
    dispatch(getAllCategorias())
  }, [dispatch])

  const [descricao_produto, setDescricao_produto] = useState("");
  const [id_tabela, setId_tabela] = useState("");
  const [id_categoria, setId_categoria] = useState("");
  const [quantidade, setQuantidade] = useState("");

  const resetComponentMessage = () => {
    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);
  };

  const submitHandle = (e) => {
    e.preventDefault();

    const produto = {
      descricao_produto,
      id_categoria,
      qtd_estoque: quantidade
    };

    console.log("Produto a ser enviado:", produto); // Verifique aqui o objeto produto


    dispatch(insertProduto(produto));

    setDescricao_produto("");
    setId_categoria("");
    setQuantidade("");

    resetComponentMessage();
  };

  // const clearInputs = (e) => {
  //   e.preventDefault();
  //   setDescricao_produto("");
  //   setId_tabela("");
  //   setId_categoria("");
  //   dispatch(resetMessage()); // Adicione esta linha
  // };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <GradientWrapper>
      <HeaderCadsatro label="CADASTRO DE PRODUTO" />
      <div className="flex justify-center items-center mt-14">
        <form onSubmit={submitHandle} className="flex flex-col gap-4 w-96">
          {/* descrição do produto */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nome" className="text-white font-bold">
              DESCRIÇÃO:
            </Label>
            <Input
              type="text"
              id="descricao_produto"
              placeholder="Escreva a descrição do produto"
              onChange={(e) => setDescricao_produto(e.target.value)}
              value={descricao_produto || ""}
            />
          </div>
          {/* quantidade */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nome" className="text-white font-bold">
              QUANTIDADE:
            </Label>
            <Input
              type="text"
              id="quantidade"
              placeholder="Escreva a quantidade do produto"
              onChange={(e) => setQuantidade(e.target.value)}
              value={quantidade || ""}
            />
          </div>
          {/* Autocomplete da descrição do produto */}
          <>
            <label className="text-white font-bold text-sm">
              CATEGORIA:{" "}
              <Autocomplete
                id="descricao_produto"
                options={categorias}
                getOptionLabel={(option) => option.categoria}
                onChange={(event, newValue) => {
                  setId_categoria(newValue ? newValue.id_categoria : "");
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
                      text-black mt-1 font-normal"
                      placeholder="Digite a categoria do produto"
                    />
                  </div>
                )}
              />
            </label>
          </>
          <div className="flex justify-center">
            {!loadingProduto &&<button className="text-white bg-black font-bold w-[200px] h-[40px] rounded-xl">
              Cadastrar
            </button>}
            {loadingProduto &&<button className="text-white bg-black font-bold w-[200px] h-[40px] rounded-xl">
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
