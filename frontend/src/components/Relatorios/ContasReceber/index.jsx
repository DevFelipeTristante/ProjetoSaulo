import HeaderCadsatro from "../../Cadastros/HeaderCadastro";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import { Input } from "@/components/ui/input";
import { getContasReceber } from "../../../slices/contaSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react"; // Importe o useState

export default function ContasReceber() {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.usuario);
  const { contas } = useSelector((state) => state.conta);

  // Estados para as datas inicial e final
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");

  // Funções para atualizar os estados das datas inicial e final
  const handleDataInicialChange = (event) => {
    setDataInicial(event.target.value);
  };

  const handleDataFinalChange = (event) => {
    setDataFinal(event.target.value);
  };

  const handleBuscarClick = () => {
    // Formate as datas para o formato yyyy-MM-dd
    const formattedDataInicial = dataInicial ? new Date(dataInicial).toISOString().split('T')[0] : '';
    const formattedDataFinal = dataFinal ? new Date(dataFinal).toISOString().split('T')[0] : '';

    // Despache a ação Redux com os valores das datas formatadas
    dispatch(getContasReceber({ data_inicial: formattedDataInicial, data_final: formattedDataFinal }));
  };

  const contasFormatadas = contas.map(conta => {
    return {
      cliente: conta.Cliente,
      data: new Date(conta.Data).toLocaleDateString('pt-BR'), // Formata a data para o formato desejado
      empresa: conta.Empresa,
      numeroConta: conta['Nº da conta'],
      quantidadeParcelas: conta['Qtde Parcelas'],
      valorParcela: parseFloat(conta['Valor da parcela']).toFixed(2), // Formata o valor da parcela para duas casas decimais
      valorTotal: parseFloat(conta['Valor total da conta']).toFixed(2) // Formata o valor total da conta para duas casas decimais
    };
  });

  // Renderizar um componente de carregamento enquanto os dados estão sendo buscados
  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <GradientWrapper>
      <HeaderCadsatro label="CONTAS A RECEBER" />
      <div className="flex justify-center items-center mt-4">
        <div className="w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 h-[30rem] rounded-3xl bg-[#053057] flex flex-col items-center">
          {/* inputs */}
          <div className="p-4 flex flex-col sm:flex-row items-center gap-x-4">
            <label htmlFor="" className="text-sm font-bold text-white">
              INSIRA A DATA INICIAL
            </label>
            <Input
              type="date"
              id="data_inicial"
              placeholder="INSIRA A DATA INICIAL"
              className="h-10 sm:w-36 md:w-48 lg:w-56 xl:w-64 rounded-md border border-neutral-200
              bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
              file:text-sm file:font-medium placeholder:text-neutral-500 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
              focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
               dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                text-black mt-1 font-normal"
              value={dataInicial} onChange={handleDataInicialChange} // Adicione o evento onChange
            />
            <label htmlFor="" className="text-sm font-bold text-white">
              INSIRA A DATA FINAL
            </label>
            <Input
              type="date"
              id="data_final"
              placeholder="INSIRA A DATA FINAL"
              className="h-10 sm:w-36 md:w-48 lg:w-56 xl:w-64 rounded-md border border-neutral-200
              bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
              file:text-sm file:font-medium placeholder:text-neutral-500 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
              focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
               dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                text-black mt-1 font-normal"
              value={dataFinal} onChange={handleDataFinalChange} // Adicione o evento onChange
            />
            <button
              className="h-10 sm:w-28 md:w-36 bg-black rounded-xl border border-black px-3 py-2 text-xs flex justify-center items-center mt-1 text-white"
              onClick={handleBuscarClick} // Adicione o evento onClick
            >
              BUSCAR
            </button>
          </div>
          {/* restante do código */}
          <div className="w-full sm:w-11/12 border-2 border-black bg-white rounded-xl mt-4">
            {/* descrições */}
            <div className="grid grid-cols-6 p-2 border-b-2 border-black">
              <label htmlFor="" className="font-semibold">
                CONTA Nº
              </label>
              <label htmlFor="" className="font-semibold text-center">
                CLIENTE
              </label>
              <label htmlFor="" className="font-semibold text-center">
                DATA INICIAL
              </label>
              <label htmlFor="" className="font-semibold text-center">
                VALOR DA PARCELA
              </label>
              <label htmlFor="" className="font-semibold text-center">
                QUANTIDADE 
              </label>
              <label htmlFor="" className="font-semibold text-right">
                VALOR DA CONTA
              </label>
            </div>
            {/* list */}
            <div className="h-[300px] sm:h-[200px] overflow-auto">
              {contasFormatadas.map((conta, index) => (
                <div
                  key={index}
                  className="grid grid-cols-6 p-2 border-b-2 border-black"
                >
                  <label htmlFor="" className="">
                    {conta.numeroConta}
                  </label>
                  <label htmlFor="" className="text-center">
                    {conta.cliente}
                  </label>
                  <label htmlFor="" className="text-center">
                    {conta.data}
                  </label>
                  <label htmlFor="" className="text-center">
                    R$ {conta.valorParcela}
                  </label>
                  <label htmlFor="" className="text-center">
                    {conta.quantidadeParcelas}
                  </label>
                  <label htmlFor="" className="text-right">
                    R$ {conta.valorTotal}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <button className="p-2 text-white bg-black w-[150px] sm:w-[200px] m-2 rounded-xl font-semibold">
            IMPRIMIR
          </button>
        </div>
      </div>
      <BarMenu />
    </GradientWrapper>
  );
}
