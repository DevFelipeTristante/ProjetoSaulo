import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HomeIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  { rotulo: "Cadastro de Empresa", caminho: "/CadastroEmpresa" },
  { rotulo: "Cadastro de Fornecedores", caminho: "/CadastroFornecedor" },
  { rotulo: "Cadastro de Produtos", caminho: "/CadastroProduto" },
  { rotulo: "Cadastro de Telefones", caminho: "/CadastroTelefones" },
  { rotulo: "Cadastro de Usuário", caminho: "/CadastroUsuario" },
];

export default function BarMenu() {
  const { auth } = useAuth();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    return <Navigate to="/login" />;
  };

  const { loading } = useSelector((state) => state.usuario);

  if (loading) {
    return <p>Carregando...</p>;
  }

  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-between fixed bottom-0 bg-black w-full h-16">
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
            <DropdownMenuItem
              key={item.rotulo}
              className="font-bold text-white"
              onClick={() => navigate(item.caminho)}
            >
              {item.rotulo}
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
  );
}
