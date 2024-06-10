import HeaderCadsatro from "../../Cadastros/HeaderCadastro";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import { Input } from "@/components/ui/input";
import Autocomplete from "@mui/material/Autocomplete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { updateComissao, getComissaoVendedor } from "../../../slices/comissaoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Comissoes() {
  const dispatch = useDispatch();
  const { comissaos } = useSelector((state) => state.comissao);

  useEffect(() => {
    dispatch(getComissaoVendedor());
  }, [dispatch]);

  const handleUpdate = async (id_comissao) => {
    await dispatch(updateComissao({ id_comissao, comissao_paga: 'S' }));
    dispatch(getComissaoVendedor());
  };

  return (
    <GradientWrapper>
      <HeaderCadsatro label="COMISSÕES" />
      <div className="flex justify-center items-center mt-4">
        <div className="w-11/12 lg:w-3/4 xl:w-2/3 rounded-3xl bg-[#053057] flex flex-col items-center">
          {/* inputs */}
          {/* <div className="p-4 flex flex-col sm:flex-row items-center gap-x-4 w-full">
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
            />
            <Autocomplete
              id="nome_funcionario"
              options={options}
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
                    placeholder="INSIRA O NOME DO FUNCIONÁRIO"
                  />
                </div>
              )}
            />
            <button className="h-10 w-full sm:w-auto bg-black rounded-xl border border-black px-3 py-2 text-xs flex justify-center items-center mt-1 text-white">
              BUSCAR
            </button>
          </div> */}
          {/* tabela */}
          <div className="w-full border-2 border-black bg-white rounded-xl mt-4 overflow-hidden">
            <div className="grid grid-cols-5 p-2 border-b-2 border-black">
              <label htmlFor="" className="font-semibold">
                FUNCIONÁRIO
              </label>
              <label htmlFor="" className="font-semibold text-center">
                ULTIMA COMISSÃO
              </label>
              <label htmlFor="" className="font-semibold text-center">
                VALOR A PAGAR
              </label>
              <label htmlFor="" className="font-semibold text-center">
                STATUS 
              </label>
              <label htmlFor="" className="font-semibold text-right">
                PAGAR 
              </label>
            </div>
            {/* list */}
            <div className="h-[300px] lg:h-[200px] overflow-y-auto">
              {comissaos.map((comissao, index) => (
                <div
                  key={comissao.id_comissao}
                  className="grid grid-cols-5 p-2 border-b-2 border-black"
                >
                  <label htmlFor="" className="">
                    {comissao.nome_usuario}
                  </label>
                  <label htmlFor="" className="text-center">
                    R$ {comissao.valor_comissao}
                  </label>
                  <label htmlFor="" className="text-center">
                    R$ {comissao.valor_total}
                  </label>
                  <label htmlFor="" className="text-center">
                    {comissao.comissao_paga === 'S' ? "Paga" : "Pendente" }
                  </label>
                  <label className="text-right">
                    {comissao.comissao_paga !== 'S' && (
                      <FontAwesomeIcon icon={faCheck} color="red" className="cursor-pointer" onClick={() => handleUpdate(comissao.id_comissao)} />
                    )}
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
