import HeaderCadsatro from "../../Cadastros/HeaderCadastro";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import { Input } from "@/components/ui/input";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react"; // Importe o useState
import { getEntrada, getSaida } from "../../../slices/produtoSlice";

const options = ["Entrada", "Saída"];

export default function MovimentacaoEstoque() {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.usuario);
  const { produtos } = useSelector((state) => state.produto);

  // Estados para as datas inicial, final e opção selecionada
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");
  const [selectedOption, setSelectedOption] = useState(null); // Estado para a opção selecionada

  // Funções para atualizar os estados das datas inicial e final
  const handleDataInicialChange = (event) => {
    setDataInicial(event.target.value);
  };

  const handleDataFinalChange = (event) => {
    setDataFinal(event.target.value);
  };

  const handleOptionChange = (event, value) => {
    setSelectedOption(value);
    // Limpar o array de produtos ao alterar a seleção
    dispatch(getEntrada([])); // Limpa os produtos de entrada
    dispatch(getSaida([])); // Limpa os produtos de saída
  };
  
  const handleBuscarClick = () => {
    // Verifique se uma opção foi selecionada antes de despachar a ação Redux
    if (selectedOption === "Entrada") {
      dispatch(getEntrada({ data_inicial: dataInicial, data_final: dataFinal }));
    } else if (selectedOption === "Saída") {
      dispatch(getSaida({ data_inicial: dataInicial, data_final: dataFinal }));
    }
  };

  const produtosFormatados = produtos.map(produto => {
    const quantidade = selectedOption === "Entrada" ? produto.QuantidadeEntrada : produto.QuantidadeSaida;
    const data = selectedOption === "Entrada" ? new Date(produto.DataEntrada).toLocaleDateString('pt-BR') : new Date(produto.DataSaida).toLocaleDateString('pt-BR');
    return {
      quantidade,
      data,
      descricao: produto.DescricaoProduto,
    };
  });

  return (
    <GradientWrapper>
      <HeaderCadsatro label="MOVIMENTAÇÃO ESTOQUE" />
      <div className="flex justify-center items-center mt-4">
        <div className="w-full lg:w-3/4 xl:w-2/3 rounded-3xl bg-[#053057] flex flex-col items-center">
          {/* inputs */}
          <div className="p-4 flex flex-col sm:flex-row items-center gap-x-4 w-full">
            <label htmlFor="" className="text-sm font-bold text-white">
              INSIRA A DATA INICIAL
            </label>
            <Input
              type="date"
              id="data_inicial"
              placeholder="INSIRA A DATA INICIAL"
              className="h-10 w-full sm:w-auto rounded-md border border-neutral-200
              bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
              file:text-sm file:font-medium placeholder:text-neutral-500 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
              focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
               dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                text-black mt-1 font-normal"
                value={dataInicial} onChange={handleDataInicialChange}
            />
            <label htmlFor="" className="text-sm font-bold text-white">
              INSIRA A DATA FINAL
            </label>
            <Input
              type="date"
              id="data_final"
              placeholder="INSIRA A DATA FINAL"
              className="h-10 w-full sm:w-auto rounded-md border border-neutral-200
              bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
              file:text-sm file:font-medium placeholder:text-neutral-500 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
              focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
               dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                text-black mt-1 font-normal"
                value={dataFinal} onChange={handleDataFinalChange}
            />
            <Autocomplete
              id="descricao_produto"
              options={options}
              onChange={handleOptionChange} // Adicione o manipulador de eventos para a mudança de opção
              renderInput={(params) => (
                <div ref={params.InputProps.ref} className="w-full">
                  <input
                    type="text"
                    {...params.inputProps}
                    className="h-10 w-full rounded-md border border-neutral-200
                      bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
                      file:text-sm file:font-medium placeholder:text-neutral-500 
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
                      focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
                       dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                        dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                        text-black mt-1 font-normal"
                    placeholder="TIPO MOVIMENTAÇÃO"
                  />
                </div>
              )}
            />
            <button className="h-10 w-full sm:w-auto bg-black rounded-xl border border-black px-3 py-2 text-xs flex justify-center items-center mt-1 text-white" onClick={handleBuscarClick}>
              BUSCAR
            </button>
          </div>
          {/* tabela */}
          <div className="w-full border-2 border-black bg-white rounded-xl mt-4 overflow-hidden">
            <div className="grid grid-cols-3 p-2 border-b-2 border-black">
              <label htmlFor="" className="font-semibold">
                DESCRIÇÃO DO PRODUTO
              </label>
              <label htmlFor="" className="font-semibold text-center">
                {selectedOption === "Entrada" ? "ENTRADA" : "SAÍDA"}
              </label>
              <label htmlFor="" className="font-semibold text-right">
                DATA
              </label>
            </div>
            {/* list */}
            <div className="h-[300px] lg:h-[200px] overflow-y-auto">
              {produtosFormatados.map((produto, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 p-2 border-b-2 border-black"
                  >
                  <label htmlFor="" className="">
                    {produto.descricao}
                  </label>
                  <label htmlFor="" className="text-center">
                    {produto.quantidade} UN
                  </label>
                  <label htmlFor="" className="text-right">
                    {produto.data}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <button className="p-2 text-white bg-black w-full sm:w-[150px] lg:w-[200px] m-2 rounded-xl font-semibold">
            IMPRIMIR
          </button>
        </div>
      </div>
      <BarMenu />
    </GradientWrapper>
  );
}