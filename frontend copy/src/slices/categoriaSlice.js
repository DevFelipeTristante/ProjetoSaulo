import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoriaService from "../services/categoriaService";

const initialState = {
  categorias: [],
  categoria: {},
  error: false,
  success: false,
  loading: false,
  message: null,
}

// Insert user car
export const insertCategoria = createAsyncThunk(
  "categoria/insert",
  async (categoria, thunkAPI) => {
    const data = await categoriaService.insertCategoria(categoria)

    // check for errors
    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const getCategorias = createAsyncThunk(
  "categoria/getall", 
  async(_, thunkAPI) => {
    const data = await categoriaService.getCategorias()

    return data 
})

export const categoriaSlice = createSlice({
  name: "categoria",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
  builder
    .addCase(insertCategoria.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(insertCategoria.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.categoria = action.payload
      state.categorias.unshift(state.categoria)
      state.message = "Categoria cadastrado com sucesso!" 
    })
    .addCase(insertCategoria.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
      state.categoria = {}
    })
    .addCase(getCategorias.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getCategorias.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.categorias = action.payload 
    })
  }
})

export const { resetMessage } = categoriaSlice.actions
export default categoriaSlice.reducer