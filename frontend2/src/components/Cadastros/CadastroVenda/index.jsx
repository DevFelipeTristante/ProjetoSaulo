import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import HeaderCadsatro from "../HeaderCadastro";
import Autocomplete from "@mui/material/Autocomplete";
import { Input } from "@/components/ui/input";

const options = ["Option 1", "Option 2"];

export default function CadastroVenda() {
  return (
    <GradientWrapper>
      <HeaderCadsatro label="VENDA" />
      <div className="flex justify-center items-center mt-2">
        {/* inputs */}
        <div className="w-11/12 h-[30rem] rounded-3xl bg-[#053057] flex flex-col items-center">
          <div className="p-4 flex items-center gap-x-4">
            <Autocomplete
              id="descricao_produto"
              options={options}
              renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                  <input
                    type="text"
                    {...params.inputProps}
                    className="flex h-10 w-72 rounded-md border border-neutral-200
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
              type="number" // Alterado para tipo number
              id="valor_produto" // Alterado o id para ser único
              placeholder="VALOR DO PRODUTO"
              className="flex h-10 w-72 rounded-md border border-neutral-200
              bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
              file:text-sm file:font-medium placeholder:text-neutral-500 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
              focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
               dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                text-black mt-1 font-normal"
              inputmode="numeric" // Define o modo de entrada como numérico
              pattern="\d*" // Permite apenas dígitos numéricos
            />
            <Input
              type="number" // Alterado para tipo number
              id="quantidade_produto" // Alterado o id para ser único
              placeholder="INSIRA A QUANTIDADE DO PRODUTO"
              className="flex h-10 w-72 rounded-md border border-neutral-200
              bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
              file:text-sm file:font-medium placeholder:text-neutral-500 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
              focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
               dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                text-black mt-1 font-normal"
              inputmode="numeric" // Define o modo de entrada como numérico
              pattern="\d*" // Permite apenas dígitos numéricos
            />
            <button className="h-10 w-36 bg-black rounded-xl border border-black px-3 py-2 text-xs flex items-center mt-1">
              <label htmlFor="" className="text-white">
                ADICIONAR À VENDA
              </label>
            </button>
          </div>
          <div className="w-11/12 h-5/6 border-2 border-black">
            <div className="flex justify-between p-2 border-b-2 border-black">
              <label htmlFor="" className="text-white">
                DESCRIÇÃO DO PRODUTO
              </label>
              <label htmlFor="" className="text-white">
                R$ 00,00
              </label>
              <label htmlFor="" className="text-white">
                X UN
              </label>
            </div>
          </div>
          <button className="p-2 text-white bg-black w-[150px] m-2 rounded-xl">
            FINALIZAR VENDA
          </button>
        </div>
      </div>
      <BarMenu />
    </GradientWrapper>
  );
}
