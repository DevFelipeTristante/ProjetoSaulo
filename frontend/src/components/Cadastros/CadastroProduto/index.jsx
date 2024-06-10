import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import HeaderCadsatro from "../HeaderCadastro";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Autocomplete from "@mui/material/Autocomplete";

import { useDispatch, useSelector } from "react-redux";
import { insertProduto, resetMessage, updateProduto } from "../../../slices/produtoSlice";
import { useEffect, useState } from "react";
import Message from "../../Message/Message";
import { getAllCategorias } from "../../../../../frontend/src/slices/categoriaSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllTabelas } from "../../../slices/tabelaSlice";

export default function CadastroProduto() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { loading } = useSelector((state) => state.usuario);
  const { categorias } = useSelector((state) => state.categoria);
  const { tabelas } = useSelector((state) => state.tabela);

  const {
    message,
    error,
  } = useSelector((state) => state.produto);

  const [descricao_produto, setDescricao_produto] = useState("");
  const [id_categoria, setId_categoria] = useState("");
  const [id_tabela, setId_tabela] = useState(""); // Adicionando id_tabela
  const [qtd_estoque, setQtd_estoque] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [tabelaSelecionada, setTabelaSelecionada] = useState(null); // Adicionando tabelaSelecionada
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    dispatch(getAllCategorias())
    dispatch(getAllTabelas())
  }, [dispatch])

  useEffect(() => {
    if (location.state && location.state.produto) {
      const { produto } = location.state;
      setDescricao_produto(produto.descricao_produto);
      setId_categoria(produto.id_categoria);
      setId_tabela(produto.id_tabela); // Configurando id_tabela
      setQtd_estoque(produto.qtd_estoque);
      const categoria = categorias.find(categoria => categoria.id_categoria === produto.id_categoria);
      const tabela = tabelas.find(tabela => tabela.id_tabela === produto.id_tabela); // Configurando tabela
      setCategoriaSelecionada(categoria || null);
      setTabelaSelecionada(tabela || null); // Configurando tabelaSelecionada
      setIsEdit(true);
    } else {
      // Reset to insertion mode if no fornecedor in location state
      setDescricao_produto("");
      setId_categoria(null);
      setId_tabela(null); // Reset id_tabela
      setQtd_estoque(null)
      setCategoriaSelecionada(null);
      setTabelaSelecionada(null); // Reset tabelaSelecionada
      setIsEdit(false);
    }
  }, [location.state, categorias, tabelas]);

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
      id_tabela, // Incluindo id_tabela
      qtd_estoque
    };

    if (isEdit) {
      dispatch(updateProduto({ ...produto, id_produto: location.state.produto.id_produto }))
        .then(() => {
          resetComponentMessage();
          navigate("/ProdutoUpdate");
        });
    } else {
      dispatch(insertProduto(produto))
        .then(() => {
          resetComponentMessage();
        });
    }

    setDescricao_produto("");
    setId_categoria(null);
    setId_tabela(null); // Reset id_tabela
    setQtd_estoque("");
    setCategoriaSelecionada(null);
    setTabelaSelecionada(null); // Reset tabelaSelecionada
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <GradientWrapper>
      <HeaderCadsatro label={isEdit ? "EDITAR PRODUTO" : "CADASTRO DE PRODUTO"} />
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
              id="qtd_estoque"
              placeholder="Escreva a quantidade do produto"
              onChange={(e) => setQtd_estoque(e.target.value)}
              value={qtd_estoque || ""}
            />
          </div>
          {/* Autocomplete da descrição do produto */}
          <>
            <label className="text-white font-bold text-sm">
              CATEGORIA:{" "}
              <Autocomplete
                id="id_categoria"
                options={categorias}
                getOptionLabel={(option) => option.categoria}
                value={categoriaSelecionada}
                isOptionEqualToValue={(option, value) => option.id_categoria === value?.id_categoria}
                onChange={(event, newValue) => {
                  setCategoriaSelecionada(newValue);
                  setId_categoria(newValue ? newValue.id_categoria : null);
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
          <>
            <label className="text-white font-bold text-sm">
              TABELA PREÇO:{" "}
              <Autocomplete
                id="id_tabela"
                options={tabelas}
                getOptionLabel={(option) => option.preco}
                value={tabelaSelecionada}
                isOptionEqualToValue={(option, value) => option.id_tabela === value?.id_tabela}
                onChange={(event, newValue) => {
                  setTabelaSelecionada(newValue);
                  setId_tabela(newValue ? newValue.id_tabela : null);
                }}
                renderInput={(params) => (
                  <div ref={params.InputProps.ref}>
                    <input
                      type="text"
                      {...params.inputProps}
                      className="flex h-10 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 text-black mt-1 font-normal"
                      placeholder="Digite o preço"
                    />
                  </div>
                )}
              />
            </label>
          </>
          <div className="flex justify-center">
            <div className="flex justify-center">
              <button type="submit" className="text-white bg-black font-bold w-full max-w-xs h-10 rounded-xl">
                {isEdit ? "Atualizar" : "Confirmar"}
              </button>
            </div>
          </div>
          {/* {message && (
            <div className="mt-4 lg:mt-12 p-2 bg-green-500 text-white rounded font-bold text-center">
              {message}
            </div>
          )} */}
        </form>
      </div>
      {error && <Message msg={error} type="error" />}
      {message && <Message msg={message} type="success" />}
      <BarMenu />
    </GradientWrapper>
  );
}
