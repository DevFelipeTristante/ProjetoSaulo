import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import HeaderCadsatro from "../HeaderCadastro";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CadastroCidade() {
  return (
    <GradientWrapper>
      <HeaderCadsatro label="CIDADE" />
      <div className="flex justify-center items-center mt-14">
      <form action="" className="flex flex-col gap-4 w-96">
          {/* nome da cidade */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nome" className="text-white font-bold">
              NOME:
            </Label>
            <Input
              type="text"
              id="nome_cidade"
              placeholder="Escreva o nome da cidade"
            />
          </div>
          {/* estado */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nome" className="text-white font-bold">
              ESTADO/UF:
            </Label>
            <Input type="text" id="estado" placeholder="Escreva o estado" />
          </div>
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
