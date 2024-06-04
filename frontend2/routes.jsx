import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import CadastroFornecedor from "./src/components/Cadastros/CadastroFornecedor";
import Login from "./src/components/Login/index";
import CadastroCidade from "./src/components/Cadastros/CadastroCidade";
import CadastroCategoria from "./src/components/Cadastros/CadastroCategoria";
import CadastroProduto from "./src/components/Cadastros/CadastroProduto";
import CadastroVenda from "./src/components/Cadastros/CadastroVenda";
import CadastroTelefone from "./src/components//Cadastros/CadastroTelefone";
import CadastroUsuario from "./src/components/Cadastros/CadastroUsuario";
import InicialPage from "./src/components/InicialPage";
import CadastroClientes from "./src/components/Cadastros/CadastroClientes";
import ContasReceber from "./src/components/Relatorios/ContasReceber";
import MaisVendidos from "./src/components/Relatorios/MaisVendidos";
import MaisVendidosEmpresa from "./src/components/Relatorios/MaisVendidosEmpresa";
import MovimentacaoEstoque from "./src/components/Relatorios/MovimentacaoEstoque";
import Relatorio from "./src/components/Relatorios/Relatorio";
import { useAuth } from "./src/hooks/useAuth";

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
        <Route path="/CadastroUsuario" element={auth ? <CadastroUsuario /> : <Navigate to="/Login" />} />
        <Route path="/CadastroVenda" element={auth ? <CadastroVenda /> : <Navigate to="/Login" />} />
        <Route path="/CadastroCidade" element={auth ? <CadastroCidade /> : <Navigate to="/Login" />} />
        <Route path="/CadastroCategoria" element={auth ? <CadastroCategoria /> : <Navigate to="/Login" />} />
        <Route path="/CadastroProduto" element={auth ? <CadastroProduto /> : <Navigate to="/Login" />} />
        <Route path="/CadastroTelefone" element={auth ? <CadastroTelefone /> : <Navigate to="/Login" />} />
        <Route path="/ContasReceber" element={auth ? <ContasReceber /> : <Navigate to="/Login" />} />
        <Route path="/MaisVendidos" element={auth ? <MaisVendidos /> : <Navigate to="/Login" />} />
        <Route path="/MaisVendidosEmpresa" element={auth ? <MaisVendidosEmpresa /> : <Navigate to="/Login" />} />
        <Route path="/MovimentacaoEstoque" element={auth ? <MovimentacaoEstoque /> : <Navigate to="/Login" />} />
        <Route path="/Relatorios" element={auth ? <Relatorio /> : <Navigate to="/Login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteApp;
