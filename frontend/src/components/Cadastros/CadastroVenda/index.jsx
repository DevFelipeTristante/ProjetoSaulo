import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import HeaderCadsatro from "../HeaderCadastro";
import Autocomplete from "@mui/material/Autocomplete";
import { Input } from "@/components/ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertVenda, updateVenda, resetMessage } from "../../../slices/vendaSlice";
import Message from "../../Message/Message";
import { getAllProdutos } from "../../../../../frontend/src/slices/produtoSlice";
import { getAllTabelas } from "../../../slices/tabelaSlice";
import { getAllFormas } from "../../../slices/formaSlice";
import { getAllClientes } from "../../../slices/clienteSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { insertItem } from "../../../slices/itemSlice";

export default function CadastroVenda() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { auth, loading } = useAuth();
  const user = JSON.parse(localStorage.getItem('usuario'));

  const { produtos } = useSelector((state) => state.produto);
  const { clientes } = useSelector((state) => state.cliente);
  const { tabelas } = useSelector((state) => state.tabela);
  const { formas } = useSelector((state) => state.forma);

  const {
    loading: loadingVenda,
    message,
    error,
  } = useSelector((state) => state.venda);

  const [id_produto, setId_produto] = useState("");
  const [id_tabela, setId_tabela] = useState("");
  const [id_cliente, setId_cliente] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [valor_venda, setValorVenda] = useState(0);
  const [qtde_parcelas, setQtde_parcelas] = useState("");
  const [id_forma, setId_forma] = useState("");
  const [formaSelecionada, setFormaSelecionada] = useState(null);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [clienteSelecionado, setClienteSelecionado] = useState(null);
  const [itensPedido, setItensPedido] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    dispatch(getAllClientes());
    dispatch(getAllProdutos());
    dispatch(getAllFormas());
    dispatch(getAllTabelas());
  }, [dispatch]);

  const today = new Date().toISOString().split("T")[0];

  const resetComponentMessage = () => {
    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);
  };

  const handleAddItem = (e) => {
    e.preventDefault();

    if (!id_produto || !quantidade) {
      alert("Preencha todos os campos para adicionar o item");
      return;
    }

    const tabela = tabelas.find(t => t.id_tabela === id_tabela);
    const produto = produtos.find(p => p.id_produto === id_produto);

    if (!tabela) {
      alert("Tabela de preço não encontrada");
      return;
    }

    const preco_total = tabela.preco * quantidade;

    const newItem = {
      id_produto,
      id_tabela,
      preco_total,
      quantidade,
    };

    setItensPedido([...itensPedido, newItem]);
    setValorVenda(valor_venda + preco_total);
    setId_produto("");
    setId_tabela("");
    setQuantidade("");
  };

  const handleRemoveItem = (index) => {
    setItensPedido(itensPedido.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const venda = {
      id_usuario: user.id_usuario,
      id_cliente,
      valor_venda,
      id_forma,
      qtde_parcelas: id_forma === 5 ? qtde_parcelas : 1,
      data: today,
      id_empresa: user.id_empresa,
    };

    console.log("venda:", venda)

    dispatch(insertVenda(venda)).then((result) => {
      const { id_venda } = result.payload;  // Supondo que o insertVenda retorna o id_venda criado
      itensPedido.forEach(item => {
        dispatch(insertItem({ ...item, id_venda }));
      });
      resetComponentMessage();
    });
  };

  return (
    <GradientWrapper>
      <HeaderCadsatro label="VENDA" />
      <div className="flex flex-col lg:flex-row justify-evenly p-4 lg:p-9 items-center lg:items-start bg-gradient-primary">
        <form onSubmit={handleAddItem}>
          <div className="w-full lg:w-52 space-y-5 mb-4 lg:mb-0">
            <label htmlFor="" className="font-bold text-white text-xl lg:text-4xl">
              INSIRA AS INFORMAÇÕES
            </label>
            <Autocomplete
              id="id_cliente"
              options={clientes}
              getOptionLabel={(option) => option.nome_cliente}
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
                    className="flex h-10 w-full lg:w-72 rounded-md border border-neutral-200
                    bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
                    file:text-sm file:font-medium placeholder:text-neutral-500 
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
                    focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
                     dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                      dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                      text-black mt-1 font-normal"
                    placeholder="INSIRA O CLIENTE"
                  />
                </div>
              )}
            />
            <Autocomplete
              id="descricao_produto"
              options={produtos}
              getOptionLabel={(option) => option.descricao_produto}
              value={produtoSelecionado}
              isOptionEqualToValue={(option, value) => option.id_produto === value?.id_produto}
              onChange={(event, newValue) => {
                setProdutoSelecionado(newValue);
                setId_produto(newValue ? newValue.id_produto : null);
                setId_tabela(newValue ? newValue.id_tabela : null);
              }}
              renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                  <input
                    type="text"
                    {...params.inputProps}
                    className="flex h-10 w-full lg:w-72 rounded-md border border-neutral-200
                    bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
                    file:text-sm file:font-medium placeholder:text-neutral-500 
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
                    focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
                     dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                      dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                      text-black mt-1 font-normal"
                    placeholder="INSIRA A DESCRIÇÃO DO PRODUTO"
                  />
                </div>
              )}
            />
            <Input
              type="number"
              id="quantidade_produto"
              placeholder="QUANTIDADE DO PRODUTO"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
              className="flex h-10 w-full lg:w-72 rounded-md border border-neutral-200
              bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
              file:text-sm file:font-medium placeholder:text-neutral-500 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
              focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
               dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                text-black mt-1 font-normal"
              inputMode="numeric"
              pattern="\d*"
            />
            <button className="h-10 w-full lg:w-36 bg-black rounded-xl border border-black px-3 py-2 text-xs flex items-center justify-center mt-1">
              <label htmlFor="" className="text-white">
                ADICIONAR À VENDA
              </label>
            </button>
          </div>
        </form>
        <div className="w-full lg:w-[1024px] h-auto lg:h-[640px] bg-[#053057] rounded-lg flex flex-col items-center">
          <div className="w-full lg:w-11/12 border-2 border-black bg-white rounded-xl mt-4">
            <div className="grid grid-cols-4 p-2 border-b-2 border-black text-xs lg:text-base">
              <label htmlFor="" className="font-semibold">
                DESCRIÇÃO PRODUTO
              </label>
              <label htmlFor="" className="font-semibold text-center">
                VALOR
              </label>
              <label htmlFor="" className="font-semibold text-center">
                QUANTIDADE
              </label>
              <label htmlFor="" className="font-semibold text-center">
                EXCLUIR ITEM
              </label>
            </div>
            <div className="h-[300px] overflow-y-auto">
              {itensPedido.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 p-2 border-b-2 border-black text-xs lg:text-base"
                >
                  <label htmlFor="" className="">
                    {produtos.find(p => p.id_produto === item.id_produto)?.descricao_produto}
                  </label>
                  <label htmlFor="" className="text-center">
                    R$ {item.preco_total}
                  </label>
                  <label htmlFor="" className="text-center">
                    {item.quantidade} UN
                  </label>
                  <label htmlFor="" className="text-center">
                    <FontAwesomeIcon icon={faTrash} color="red" onClick={() => handleRemoveItem(index)} />
                  </label>
                </div>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-x-2 px-4 lg:pl-3 mt-4 lg:mt-10 w-full lg:w-auto">
              {id_forma === 5 && (
                <Input
                  type="number"
                  id="quantidade_parcelas"
                  placeholder="QUANTIDADE DE PARCELAS"
                  value={qtde_parcelas}
                  onChange={(e) => setQtde_parcelas(e.target.value)}
                  className="flex h-10 w-full lg:w-72 rounded-md border border-neutral-200
                bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
                file:text-sm file:font-medium placeholder:text-neutral-500 
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
                focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
                 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                  dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                  text-black font-normal"
                  inputMode="numeric"
                  pattern="\d*"
                />
              )}
              <Autocomplete
                id="forma_pagamento"
                options={formas}
                getOptionLabel={(option) => option.descricao}
                value={formaSelecionada}
                isOptionEqualToValue={(option, value) => option.id_forma === value?.id_forma}
                onChange={(event, newValue) => {
                  setFormaSelecionada(newValue);
                  setId_forma(newValue ? newValue.id_forma : null);
                }}
                renderInput={(params) => (
                  <div ref={params.InputProps.ref}>
                    <input
                      type="text"
                      {...params.inputProps}
                      className="flex h-10 w-full lg:w-72 rounded-md border border-neutral-200
                    bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
                    file:text-sm file:font-medium placeholder:text-neutral-500 
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
                    focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
                     dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                      dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                      text-black font-normal"
                      placeholder="FORMA DE PAGAMENTO"
                    />
                  </div>
                )}
              />
              {!loadingVenda && <button className="h-10 w-full lg:w-36 bg-black rounded-xl border border-black px-3 py-2 text-xs flex justify-center items-center">
                <label htmlFor="" className="text-white">
                  FINALIZAR VENDA
                </label>
              </button>}
            </div>
          </form>
          {error && <Message msg={error} type="error" />}
          {message && <Message msg={message} type="success" />}
          {/* {error2 && <Message msg={error} type="error" />}
          {message2 && <Message msg={message} type="success" />} */}
        </div>
      </div>

      <BarMenu />
    </GradientWrapper>
  );
}
