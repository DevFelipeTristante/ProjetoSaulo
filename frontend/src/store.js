import { configureStore } from "@reduxjs/toolkit"

import authReducer from "./slices/authSlice"
import usuarioReducer from "./slices/usuarioSlice"
import produtoReducer from "./slices/produtoSlice"
import categoriaReducer from "./slices/categoriaSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    usuario: usuarioReducer,
    produto: produtoReducer,
    categoria: categoriaReducer,
  },
})