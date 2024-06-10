import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import CadastroFornecedor from "./src/components/Cadastros/CadastroFornecedor";
import CadastroEmpresa from "./src/components/Cadastros/CadastroEmpresa";
import Login from "./src/components/Login/index";
import CadastroCidade from "./src/components/Cadastros/CadastroCidade";
import CadastroCategoria from "./src/components/Cadastros/CadastroCategoria";
import CadastroProduto from "./src/components/Cadastros/CadastroProduto";
import CadastroVenda from "./src/components/Cadastros/CadastroVenda";
import CadastroTelefone from "./src/components/Cadastros/CadastroTelefone";
import CadastroUsuario from "./src/components/Cadastros/CadastroVendedores";
import InicialPage from "./src/components/InicialPage";
import CadastroClientes from "./src/components/Cadastros/CadastroClientes";
import ContasReceber from "./src/components/Relatorios/ContasReceber";
import MaisVendidos from "./src/components/Relatorios/MaisVendidos";
import MaisVendidosEmpresa from "./src/components/Relatorios/MaisVendidosEmpresa";
import MovimentacaoEstoque from "./src/components/Relatorios/MovimentacaoEstoque";
import Relatorio from "./src/components/Relatorios/Relatorio";
import Comissoes from "./src/components/Relatorios/Comissoes";
import Administracao from "./src/components/Cadastros/Administracao";
import VendasUpdate from "./src/components/Updates/VendasUpdate";
import UsuarioUpdate from "./src/components/Updates/UsuarioUpdate";
import FornecedorUpdate from "./src/components/Updates/FornecedorUpdate";
import ProdutoUpdate from "./src/components/Updates/ProdutoUpdate";
import ClienteUpdate from "./src/components/Updates/ClienteUpdate";
import CategoriaUpdate from "./src/components/Updates/CategoriaUpdate";
import TelefoneUpdate from "./src/components/Updates/TelefoneUpdate";
import TabelaPreco from "./src/components/Cadastros/TabelaPreco";

import { useAuth } from "./src/hooks/useAuth";
import EmpresaUpdate from "./src/components/Updates/EmpresaUpdate";

function RouteApp() {
  const {auth, loading} = useAuth()

  const user = JSON.parse(localStorage.getItem('usuario'));
  const id_perfil = user ? user.id_perfil : null;

  console.log(id_perfil);

  if(loading) {
    return <p>Carregando...</p>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={!auth ? <Login /> : <Navigate to="/" />} />
        <Route path="/" element={auth ? <InicialPage /> : <Navigate to="/Login" />} />
        <Route path="/CadastroUsuario" element={auth ? <CadastroUsuario /> : <Navigate to="/Login" />} />
        <Route path="/CadastroClientes" element={auth ? <CadastroClientes /> : <Navigate to="/Login" />} />
        <Route path="/CadastroFornecedor" element={auth ? <CadastroFornecedor /> : <Navigate to="/Login" />} />
        <Route path="/CadastroEmpresa" element={auth ? <CadastroEmpresa /> : <Navigate to="/Login" />} />
        <Route path="/CadastroVenda" element={auth ? <CadastroVenda /> : <Navigate to="/Login" />} />
        <Route path="/CadastroCidade" element={auth ? <CadastroCidade /> : <Navigate to="/Login" />} />
        <Route path="/CadastroCategoria" element={auth ? <CadastroCategoria /> : <Navigate to="/Login" />} />
        <Route path="/CadastroProduto" element={auth ? <CadastroProduto /> : <Navigate to="/Login" />} />
        <Route path="/CadastroTelefones" element={auth ? <CadastroTelefone /> : <Navigate to="/Login" />} />
        <Route path="/ContasReceber" element={auth ? <ContasReceber /> : <Navigate to="/Login" />} />
        <Route path="/MaisVendidos" element={auth ? <MaisVendidos /> : <Navigate to="/Login" />} />
        <Route path="/MaisVendidosEmpresa" element={auth ? <MaisVendidosEmpresa /> : <Navigate to="/Login" />} />
        <Route path="/MovimentacaoEstoque" element={auth ? <MovimentacaoEstoque /> : <Navigate to="/Login" />} />
        <Route path="/Relatorios" element={auth ? <Relatorio /> : <Navigate to="/Login" />} />
        <Route path="/Comissoes" element={auth ? <Comissoes /> : <Navigate to="/Login" />} />
        <Route path="/Administracao" element={auth ? <Administracao /> : <Navigate to="/Login" />} />
        <Route path="/VendasUpdate" element={auth ? <VendasUpdate /> : <Navigate to="/Login" />} />
        <Route path="/UsuarioUpdate" element={auth ? <UsuarioUpdate /> : <Navigate to="/Login" />} />
        <Route path="/FornecedorUpdate" element={auth ? <FornecedorUpdate /> : <Navigate to="/Login" />} />
        <Route path="/ProdutoUpdate" element={auth ? <ProdutoUpdate /> : <Navigate to="/Login" />} />
        <Route path="/ClienteUpdate" element={auth ? <ClienteUpdate /> : <Navigate to="/Login" />} />
        <Route path="/CategoriaUpdate" element={auth ? <CategoriaUpdate /> : <Navigate to="/Login" />} />
        <Route path="/TelefoneUpdate" element={auth ? <TelefoneUpdate /> : <Navigate to="/Login" />} />
        <Route path="/EmpresaUpdate" element={auth ? <EmpresaUpdate /> : <Navigate to="/Login" />} />
        <Route path="/TabelaPreco" element={auth ? <TabelaPreco /> : <Navigate to="/Login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteApp;
