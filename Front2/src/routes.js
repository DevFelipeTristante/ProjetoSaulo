import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import CadastroFornecedor from "./components/CadastroFornecedor";
import CadastroVendedores from "./components/CadastroVendedores";

function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/CadastroFornecedor" element={<CadastroFornecedor />} />
      </Routes>
      <Routes>
        <Route path="/CadastroVendedores" element={<CadastroVendedores />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteApp;
