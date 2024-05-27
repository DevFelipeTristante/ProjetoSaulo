import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import HeaderCadsatro from "../HeaderCadastro";
import Autocomplete from "@mui/material/Autocomplete";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const options = ["Option 1", "Option 2"];

export default function CadastroVenda() {
  return (
    <GradientWrapper>
      <HeaderCadsatro label="VENDA" />
      <div className="flex justify-center items-center mt-14">
        {/* Formulario */}
        <form action="" className="flex flex-col gap-4 w-96">
          {/* Autocomplete da descrição do produto */}
          <>
            <label className="text-white font-bold">
              PRODUTO:{" "}
              <Autocomplete
                id="descricao_produto"
                options={options}
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
                      text-black mt-1 font-normal font-sm"
                      placeholder="Digite a descrição do produto"
                    />
                  </div>
                )}
              />
            </label>
          </>
          {/* Valor da venda */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nome" className="text-white font-bold">
              VALOR DA VENDA:
            </Label>
            <Input
              type="text"
              id="valor_venda"
              placeholder="Escreva o nome do usuário"
            />
          </div>
          {/* Quantidade */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nome" className="text-white font-bold">
              QUANTIDADE:
            </Label>
            <Input
              type="text"
              id="quantidade"
              placeholder="Escreva a quantidade vendida"
            />
          </div>
          {/* Botao */}
          <div className="flex justify-center">
            <button className="text-white bg-black font-bold w-[200px] h-[40px] rounded-xl">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
      <BarMenu />
    </GradientWrapper>
  );
}
