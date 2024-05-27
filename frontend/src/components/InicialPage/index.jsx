import GradientWrapper from "../GradientWrapper";
import LogoClothing from "../../assets/imgs/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const cadastros = [
  { id: 1, rotulo: "Cadastro de Fornecedores" },
  { id: 2, rotulo: "Cadastro de Vendedores" },
  { id: 3, rotulo: "Cadastro de Clientes" },
  { id: 4, rotulo: "Cadastro de Vendas" },
  { id: 5, rotulo: "Cadastro de Cidades" },
  { id: 6, rotulo: "Cadastro de Produtos" },
  { id: 7, rotulo: "Cadastro de Categorias" },
  { id: 8, rotulo: "Cadastro de Telefones" },
  { id: 9, rotulo: "Cadastro de Contas" },
  { id: 10, rotulo: "Cadastro de Movimentação" },
  { id: 11, rotulo: "Relatórios" },
];

export default function InicialPage() {
  return (
    <GradientWrapper>
      <div className="flex justify-end h-full">
        <img src={LogoClothing} className="w-[600px] h-[600px]" />
      </div>
      <div className="absolute bottom-0 bg-black w-full h-16">
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <div className="flex items-center space-x-2 mt-5 ml-2">
              <div className="flex flex-col space-y-1">
                <div className="bg-white w-[30px] h-[3px]"></div>
                <div className="bg-white w-[30px] h-[3px]"></div>
                <div className="bg-white w-[30px] h-[3px]"></div>
              </div>
              <label className="text-white font-bold">MENU</label>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="space-y-2 bg-black">
            {cadastros.map((item) => (
              <DropdownMenuItem key={item.id} className="font-bold text-white">
                {item.rotulo}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </GradientWrapper>
  );
}
