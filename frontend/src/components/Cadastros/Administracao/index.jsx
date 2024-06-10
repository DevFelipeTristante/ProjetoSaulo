import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderCadsatro from "../HeaderCadastro";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import {
  faBoxesStacked,
  faHandHoldingDollar,
  faPercent,
  faSackDollar,
  faIndustry,
  faTags,
  faTicket,
  faUser,
  faUserFriends,
  faShop,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";

import { useNavigate } from "react-router-dom";

export default function Administracao() {

  const navigate = useNavigate();

  const editarVenda = () => {
    navigate("/VendasUpdate");
  };
  const editarUsuario = () => {
    navigate("/UsuarioUpdate");
  };
  const editarFornecedor = () => {
    navigate("/fornecedorUpdate");
  };
  const editarProduto = () => {
    navigate("/produtoUpdate");
  };
  const editarCliente = () => {
    navigate("/clienteUpdate");
  };
  const editarCategoria = () => {
    navigate("/CategoriaUpdate");
  };
  const editarTelefone = () => {
    navigate("/TelefoneUpdate");
  };
  const editarEmpresa = () => {
    navigate("/EmpresaUpdate");
  };
  const editarCompra = () => {
    navigate("/CompraUpdate");
  };

  return (
    <GradientWrapper>
      <HeaderCadsatro label="ADMINISTRAÇÃO" />
      <div className="flex justify-center items-center mt-6 sm:mt-12 lg:mt-20 xl:mt-24">
        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 xl:gap-8">
          {/* vendas */}
          <div className="bg-white p-4 flex items-center gap-x-6 rounded-lg" onClick={editarVenda}>
            <FontAwesomeIcon icon={faSackDollar} className="h-16 sm:h-20 lg:h-20" />
            <div className="flex justify-center flex-1">
              <label htmlFor="" className="font-bold font-sans text-lg sm:text-xl lg:text-2xl">
                VENDAS
              </label>
            </div>
          </div>
          {/* usuarios */}
          <div className="bg-white p-4 flex items-center gap-x-6 rounded-lg" onClick={editarUsuario}>
            <FontAwesomeIcon icon={faUserFriends} className="h-16 sm:h-20 lg:h-20" />
            <div className="flex justify-center flex-1">
              <label htmlFor="" className="font-bold font-sans text-lg sm:text-xl lg:text-2xl">
                USUÁRIOS
              </label>
            </div>
          </div>
          {/* fornecedores */}
          <div className="bg-white p-4 flex items-center gap-x-6 rounded-lg" onClick={editarFornecedor}>
            <FontAwesomeIcon icon={faBuilding} className="h-16 sm:h-20 lg:h-20" />
            <div className="flex justify-center flex-1">
              <label htmlFor="" className="font-bold font-sans text-lg sm:text-xl lg:text-2xl">
                FORNECEDORES
              </label>
            </div>
          </div>
          {/* produtos */}
          <div className="bg-white p-4 flex items-center gap-x-6 rounded-lg" onClick={editarProduto}>
            <FontAwesomeIcon icon={faBoxesStacked} className="h-16 sm:h-20 lg:h-20" />
            <div className="flex justify-center flex-1">
              <label htmlFor="" className="font-bold font-sans text-lg sm:text-xl lg:text-2xl">
                PRODUTOS
              </label>
            </div>
          </div>
          {/* clientes */}
          <div className="bg-white p-4 flex items-center gap-x-6 rounded-lg" onClick={editarCliente}>
            <FontAwesomeIcon icon={faUser} className="h-16 sm:h-20 lg:h-20" />
            <div className="flex justify-center flex-1">
              <label htmlFor="" className="font-bold font-sans text-lg sm:text-xl lg:text-2xl">
                CLIENTES
              </label>
            </div>
          </div>
          {/* categorias */}
          <div className="bg-white p-4 flex items-center gap-x-6 rounded-lg" onClick={editarCategoria}>
            <FontAwesomeIcon icon={faTags} className="h-16 sm:h-20 lg:h-20" />
            <div className="flex justify-center flex-1">
              <label htmlFor="" className="font-bold font-sans text-lg sm:text-xl lg:text-2xl">
                CATEGORIAS
              </label>
            </div>
          </div>
          {/* telefones */}
          <div className="bg-white p-4 flex items-center gap-x-6 rounded-lg" onClick={editarTelefone}>
            <FontAwesomeIcon icon={faPhone} className="h-16 sm:h-20 lg:h-20" />
            <div className="flex justify-center flex-1">
              <label htmlFor="" className="font-bold font-sans text-lg sm:text-xl lg:text-2xl">
                TELEFONES
              </label>
            </div>
          </div>
          {/* empresas */}
          <div className="bg-white p-4 flex items-center gap-x-6 rounded-lg" onClick={editarEmpresa}>
            <FontAwesomeIcon icon={faIndustry} className="h-16 sm:h-20 lg:h-20" />
            <div className="flex justify-center flex-1">
              <label htmlFor="" className="font-bold font-sans text-lg sm:text-xl lg:text-2xl">
                EMPRESAS
              </label>
            </div>
          </div>
          {/* compra */}
          <div className="bg-white p-4 flex items-center gap-x-6 rounded-lg" onClick={editarCompra}>
            <FontAwesomeIcon icon={faShop} className="h-16 sm:h-20 lg:h-20" />
            <div className="flex justify-center flex-1">
              <label htmlFor="" className="font-bold font-sans text-lg sm:text-xl lg:text-2xl">
                COMPRA PRODUTO
              </label>
            </div>
          </div>
        </div>
      </div>
      <BarMenu />
    </GradientWrapper>
  );
}
