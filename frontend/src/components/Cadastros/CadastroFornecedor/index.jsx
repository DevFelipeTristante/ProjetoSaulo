import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import HeaderCadsatro from "../HeaderCadastro";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CadastroFornecedor() {
  return (
    <GradientWrapper>
      <HeaderCadsatro label="FORNECEDOR" />
      <div className="flex justify-center items-center mt-14">
        {/* formulario */}
        <form action="" className="flex flex-col gap-4 w-96">
          {/* nome do fornecedor */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nome" className="text-white font-bold">
              NOME:
            </Label>
            <Input
              type="text"
              id="nome_fornecedor"
              placeholder="Escreva o nome do fornecedor"
            />
          </div>
          {/* nome da cidade */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nome" className="text-white font-bold">
              CIDADE:
            </Label>
            <Input
              type="text"
              id="cidade"
              placeholder="Escreva o nome da sua cidade aqui"
            />
          </div>
          {/* cnpj do fornecedor */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nome" className="text-white font-bold">
              CNPJ:
            </Label>
            <Input type="text" id="cnpj" placeholder="Escreva o CNPJ aqui" />
          </div>
          {/* botao */}
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
