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

export const insertProduto = createAsyncThunk(
  "produto/insert",
  async (produto, thunkAPI) => {
    const data = await produtoService.insertProduto(produto)

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const deleteProduto = createAsyncThunk(
  "produto/delete",
  async(id_produto, thunkAPI) => {
    const data = await produtoService.deleteProduto(id_produto)

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const getAllProdutos = createAsyncThunk(
  "produto/getall", 
  async(_, thunkAPI) => {
    const data = await produtoService.getAllProdutos()

    return data 
})

export const getProdutos = createAsyncThunk(
  "produto/getprodutos", 
  async(_, thunkAPI) => {
    const data = await produtoService.getProdutos()

    return data 
})

export const getEntrada = createAsyncThunk(
  "produto/getentrada", 
  async({data_inicial, data_final}, thunkAPI) => {
    const data = await produtoService.getEntrada(data_inicial, data_final)

    return data 
})

export const getSaida = createAsyncThunk(
  "produto/getsaida", 
  async({data_inicial, data_final}, thunkAPI) => {
    const data = await produtoService.getSaida(data_inicial, data_final)

    return data 
})

export const getProduto = createAsyncThunk(
  "produto/get",
  async(_, thunkAPI) => {
    const data = await produtoService.getProdutoById()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const updateProduto = createAsyncThunk(
  "produto/update",
  async (produtoData, thunkAPI) => {
    const data = await produtoService.updateProduto(
      produtoData, 
      produtoData.id_produto
    );

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);


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
    .addCase(deleteProduto.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(deleteProduto.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null

      state.produtos = state.produtos.filter((produto) => {
        return produto.id_produto !== action.payload.id_produto
      }) 
    })
    .addCase(deleteProduto.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
      state.produto = {}
      state.message = action.payload.message
    })
    .addCase(getAllProdutos.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getAllProdutos.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.produtos = action.payload 
    })
    .addCase(getProdutos.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getProdutos.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.produtos = action.payload 
    })
    .addCase(getEntrada.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getEntrada.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.produtos = action.payload 
    })
    .addCase(getSaida.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getSaida.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.produtos = action.payload 
    })
    .addCase(getProduto.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getProduto.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.produto = action.payload 
    })
    .addCase(updateProduto.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(updateProduto.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
    
      const index = state.produtos.findIndex(produto => produto.id_produto === action.payload.produto.id_produto);
      if (index !== -1) {
        state.produtos[index] = {
          ...state.produtos[index],
          ...action.payload.produto
        };
      }
    })
    .addCase(updateProduto.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.produto = {};
    })
    
  }
})

export const { resetMessage } = produtoSlice.actions
export default produtoSlice.reducer