import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import InicialPage from "./components/InicialPage";
import CadastroFornecedor from "./components/Cadastros/CadastroFornecedor";
import CadastroUsuario from "./components/Cadastros/CadastroUsuario";
import CadastroVenda from "./components/Cadastros/CadastroVenda";
import CadastroCidade from "./components/Cadastros/CadastroCidade";
import CadastroCategoria from "./components/Cadastros/CadastroCategoria";
import CadastroProduto from "./components/Cadastros/CadastroProduto";
import CadastroTelefone from "./components/Cadastros/CadastroTelefone";

import { useAuth } from './hooks/useAuth';

function App() {
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
        <Route path="/CadastroFornecedor" element={auth ? <CadastroFornecedor /> : <Navigate to="/Login" />} />
        <Route path="/CadastroUsuario" element={auth ? <CadastroUsuario /> : <Navigate to="/Login" />} />
        <Route path="/CadastroVenda" element={auth ? <CadastroVenda /> : <Navigate to="/Login" />} />
        <Route path="/CadastroCidade" element={auth ? <CadastroCidade /> : <Navigate to="/Login" />} />
        <Route path="/CadastroCategoria" element={auth ? <CadastroCategoria /> : <Navigate to="/Login" />} />
        <Route path="/CadastroProduto" element={auth ? <CadastroProduto /> : <Navigate to="/Login" />} />
        <Route path="/CadastroTelefone" element={auth ? <CadastroTelefone /> : <Navigate to="/Login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
