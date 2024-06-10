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
import { HomeIcon } from "lucide-react";

import { logout, reset } from "../../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

const cadastros = [
  { rotulo: "Administração", caminho: "/Administracao" },
  { rotulo: "Relatórios", caminho: "/Relatorios" },
  { rotulo: "Tabela Preço", caminho: "/TabelaPreco" },
  { rotulo: "Vendas", caminho: "/CadastroVenda" },
  { rotulo: "Cadastro de Categorias", caminho: "/CadastroCategoria" },
  { rotulo: "Cadastro de Cidades", caminho: "/CadastroCidade" },
  { rotulo: "Cadastro de Clientes", caminho: "/CadastroClientes" },
  { rotulo: "Cadastro de Compra Produto", caminho: "/CadastroCompra" },
  { rotulo: "Cadastro de Empresa", caminho: "/CadastroEmpresa" },
  { rotulo: "Cadastro de Fornecedores", caminho: "/CadastroFornecedor" },
  { rotulo: "Cadastro de Produtos", caminho: "/CadastroProduto" },
  { rotulo: "Cadastro de Telefones", caminho: "/CadastroTelefones" },
  { rotulo: "Cadastro de Usuário", caminho: "/CadastroUsuario" },
];

export default function InicialPage() {
  const {auth} = useAuth()

  const user = JSON.parse(localStorage.getItem('usuario'));
  const id_perfil = user ? user.id_perfil : null;

  console.log(id_perfil);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    return <Navigate to="/login" />;
  };

  const { loading } = useSelector((state) => state.usuario);

  const cadastrosFiltrados = cadastros.filter((item) => {
    if (id_perfil === 2) {
      return item.rotulo === "Vendas" || item.rotulo === "Cadastro de Clientes";
    }
    return true;
  });

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <GradientWrapper>
      <div className="flex justify-end h-full">
        <img src={LogoClothing} className="w-[600px] h-[600px]" alt="Logo" />
      </div>
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
            {cadastrosFiltrados.map((item, index) => (
              <DropdownMenuItem key={index} className="font-bold text-white">
                <Link to={item.caminho}>{item.rotulo}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        {auth && (
          <button className="flex items-center p-0.5 w-[70px] h-[30px] bg-white rounded-lg space-x-1 mr-2" onClick={handleLogout}>
            <HomeIcon />
            <label htmlFor="" className="font-bold">
              SAIR
            </label>
          </button>
        )}
      </div>
    </GradientWrapper>
  );
}
