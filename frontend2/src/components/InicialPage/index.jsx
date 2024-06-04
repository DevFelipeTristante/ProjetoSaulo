import React from 'react';
import { Link } from 'react-router-dom'; // Importe Link do react-router-dom
import GradientWrapper from "../GradientWrapper";
import LogoClothing from "../../assets/imgs/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const cadastros = [
  { rotulo: "Cadastro de Fornecedores", caminho: "/CadastroFornecedor" },
  { rotulo: "Cadastro de Vendedores", caminho: "/CadastroVendedores" },
  { rotulo: "Cadastro de Clientes", caminho: "/CadastroClientes" },
  { rotulo: "Vendas", caminho: "/CadastroVenda" },
  { rotulo: "Cadastro de Cidades", caminho: "/CadastroCidade" },
  { rotulo: "Cadastro de Produtos", caminho: "/CadastroProduto" },
  { rotulo: "Cadastro de Categorias", caminho: "/CadastroCategoria" },
  { rotulo: "Cadastro de Telefones", caminho: "/CadastroTelefone" },
  { rotulo: "Contas", caminho: "/CadastroContasReceber" },
  { rotulo: "Movimentação", caminho: "/CadastroMovimentacaoEstoque" },
  { rotulo: "Relatórios", caminho: "/Relatorios" },
];

export default function InicialPage() {
  return (
    <GradientWrapper>
      <div className="flex justify-end h-full">
        <img src={LogoClothing} className="w-[600px] h-[600px]" alt="Logo" />
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
            {cadastros.map((item, index) => (
              <DropdownMenuItem key={index} className="font-bold text-white">
                <Link to={item.caminho}>{item.rotulo}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </GradientWrapper>
  );
}
