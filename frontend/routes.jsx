import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import CadastroFornecedor from "./components/CadastroFornecedor";
import CadastroVendedores from "./components/CadastroVendedores";
import CadastroVendas from "./components/CadastroVendas";
import CadastroCidade from "./components/CadastroCidade";
import CadastroCategoria from "./components/CadastroCategoria";
import CadastroProduto from "./components/CadastroProduto";
import CadastroTelefone from "./components/CadastroTelefone";
import CadastroContasReceber from "./components/CadastroContasReceber";
import CadastroMovimentacaoEstoque from "./components/CadastroMovimentacaoEstoque";
import Relatorios from "./components/Relatorios";

function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/CadastroFornecedor" element={<CadastroFornecedor />} />
        <Route path="/CadastroVendedores" element={<CadastroVendedores />} />
        <Route path="/CadastroVendas" element={<CadastroVendas />} />
        <Route path="/CadastroCidade" element={<CadastroCidade />} />
        <Route path="/CadastroCategoria" element={<CadastroCategoria />} />
        <Route path="/CadastroProduto" element={<CadastroProduto />} />
        <Route path="/CadastroTelefone" element={<CadastroTelefone />} />
        <Route path="/CadastroContasReceber" element={<CadastroContasReceber />} />
        <Route path="/CadastroMovimentacaoEstoque" element={<CadastroMovimentacaoEstoque />} />
        <Route path="/Relatorios" element={<Relatorios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteApp;
