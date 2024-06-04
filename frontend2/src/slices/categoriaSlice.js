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

export const insertCategoria = createAsyncThunk(
  "categoria/insert",
  async (categoria, thunkAPI) => {
    const data = await categoriaService.insertCategoria(categoria)

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const deleteCategoria = createAsyncThunk(
  "categoria/delete",
  async(_, thunkAPI) => {
    const data = await categoriaService.deleteCategoria()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const getAllCategorias = createAsyncThunk(
  "categoria/getall", 
  async(_, thunkAPI) => {
    const data = await categoriaService.getAllCategorias()

    return data 
})

export const getCategoria = createAsyncThunk(
  "categoria/get",
  async(_, thunkAPI) => {
    const data = await categoriaService.getCategoriaById()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const updateCategoria = createAsyncThunk(
  "categoria/update",
  async (categoriaData, thunkAPI) => {
    const data = await categoriaService.updateCategoria(
      categoriaData, 
      categoriaData.id_categoria
    );

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);


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
    .addCase(deleteCategoria.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(deleteCategoria.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null

      state.categorias = state.categorias.filter((categoria) => {
        return categoria.id_categoria !== action.payload.id_categoria
      })

      state.message = action.payload.message
 
    })
    .addCase(getAllCategorias.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getAllCategorias.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.categorias = action.payload 
    })
    .addCase(getCategoria.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getCategoria.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.categoria = action.payload 
    })
    .addCase(updateCategoria.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(updateCategoria.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.message = action.payload.message;
    
      const index = state.categorias.findIndex(categoria => categoria.id_categoria === action.payload.categoria.id_categoria);
      if (index !== -1) {
        state.categorias[index] = {
          ...state.categorias[index],
          ...action.payload.categoria
        };
      }
    })
    .addCase(updateCategoria.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.categoria = {};
    })
    
  }
})

export const { resetMessage } = categoriaSlice.actions
export default categoriaSlice.reducer