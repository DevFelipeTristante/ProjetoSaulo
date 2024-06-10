import { configureStore } from "@reduxjs/toolkit"

import authReducer from "./slices/authSlice"
import categoriaReducer from "./slices/categoriaSlice"
import cidadeReducer from "./slices/cidadeSlice"
import clienteReducer from "./slices/clienteSlice"
import comissaoReducer from "./slices/comissaoSlice"
import compraReducer from "./slices/compraSlice"
import contaReducer from "./slices/contaSlice"
import empresaReducer from "./slices/empresaSlice"
import formaReducer from "./slices/formaSlice"
import fornecedorReducer from "./slices/fornecedorSlice"
import itemReducer from "./slices/itemSlice"
import nfclienteReducer from "./slices/nfclienteSlice"
import perfilReducer from "./slices/perfilSlice"
import produtoReducer from "./slices/produtoSlice"
import registroReducer from "./slices/registroSlice"
import tabelaReducer from "./slices/tabelaSlice"
import telefoneReducer from "./slices/telefoneSlice"
import tipoReducer from "./slices/tipoSlice"
import usuarioReducer from "./slices/usuarioSlice"
import vendaReducer from "./slices/vendaSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categoria: categoriaReducer,
    cidade: cidadeReducer,
    cliente: clienteReducer,
    comissao: comissaoReducer,
    compra: compraReducer,
    conta: contaReducer,
    empresa: empresaReducer,
    forma: formaReducer,
    fornecedor: fornecedorReducer,
    item: itemReducer,
    nfcliente: nfclienteReducer,
    perfil: perfilReducer,
    produto: produtoReducer,
    registro: registroReducer,
    tabela: tabelaReducer,
    telefone: telefoneReducer,
    tipo: tipoReducer,
    usuario: usuarioReducer,
    venda: vendaReducer,
  },
})