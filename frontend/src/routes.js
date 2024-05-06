import React from "react";

// Components
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Login from "./components/login";
import CadastroFornecedor from "./components/CadastroFornecedor";
import CadastroVendedores from "./components/CadastroVendedores";
import CadastroVendas from "./components/CadastroVendas";
import CadastroCidade from "./components/CadastroCidade";
import CadastroCategoria from "./components/CadastroCategoria";
import CadastroProduto from "./components/CadastroProduto";
import CadastroTelefone from "./components/CadastroTelefone";
import Register from "./components/Auth/Register";

// Hooks
import { useAuth } from './hooks/useAuth';
import { useSelector } from 'react-redux';

function RouteApp() {
  const {auth, loading} = useAuth()
  const { user } = useSelector((state) => state.auth)

  if(loading) {
    return <p>Carregando...</p>
  }
  
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={auth ? <CadastroProduto /> : <Navigate to="/login" />} />
      <Route path="/cadastro-fornecedores" element={auth ? <CadastroFornecedor /> : <Navigate to="/login" />} />
      <Route path="/cadastro-vendedores" element={auth ? <CadastroVendedores /> : <Navigate to="/login" />} />
      <Route path="/cadastro-vendas" element={auth ? <CadastroVendas /> : <Navigate to="/login" />} />
      <Route path="/cadastro-cidades" element={auth ? <CadastroCidade /> : <Navigate to="/login" />} />
      <Route path="/cadastro-categorias" element={auth ? <CadastroCategoria /> : <Navigate to="/login" />} />
      <Route path="/cadastro-produtos" element={auth ? <CadastroProduto /> : <Navigate to="/login" />} />
      <Route path="/cadastro-telefones" element={auth ? <CadastroTelefone /> : <Navigate to="/login" />} />
      <Route path="/login" element={!auth ? <Login /> : <Navigate to="/cadastro-produtos" />} />
      <Route path="/register" element={!auth ? <Register /> : <Navigate to="/cadastro-produtos" />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default RouteApp;
