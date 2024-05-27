import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import produtoService from "../services/produtoService";

const initialState = {
  produtos: [],
  produto: {},
  error: false,
  success: false,
  loading: false,
  message: null,
}

// Insert user car
export const insertProduto = createAsyncThunk(
  "produto/insert",
  async (produto, thunkAPI) => {
    const data = await produtoService.insertProduto(produto)

    // check for errors
    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const produtoSlice = createSlice({
  name: "produto",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
  builder
    .addCase(insertProduto.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(insertProduto.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.produto = action.payload
      state.produtos.unshift(state.produto)
      state.message = "Produto cadastrado com sucesso!" 
    })
    .addCase(insertProduto.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
      state.produto = {}
    })
  }
})

export const { resetMessage } = produtoSlice.actions
export default produtoSlice.reducer