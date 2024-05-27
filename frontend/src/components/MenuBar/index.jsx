import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HomeIcon } from "lucide-react";

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

export default function BarMenu() {
  return (
    <div className="flex items-center justify-between absolute bottom-0 bg-black w-full h-16">
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <div className="flex items-center space-x-2 ml-2">
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
      <button className="flex items-center p-0.5 w-[70px] h-[30px] bg-white rounded-lg space-x-1 mr-2">
        <HomeIcon />
        <label htmlFor="" className="font-bold">
          SAIR
        </label>
      </button>
    </div>
  );
}
