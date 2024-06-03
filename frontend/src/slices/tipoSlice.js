import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tipoService from "../services/tipoService";

const initialState = {
  tipos: [],
  tipo: {},
  error: false,
  success: false,
  loading: false,
  message: null,
}

export const insertTipo = createAsyncThunk(
  "tipo/insert",
  async (tipo, thunkAPI) => {
    const data = await tipoService.insertTipo(tipo)

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const deleteTipo = createAsyncThunk(
  "tipo/delete",
  async(_, thunkAPI) => {
    const data = await tipoService.deleteTipo()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const getAllTipos = createAsyncThunk(
  "tipo/getall", 
  async(_, thunkAPI) => {
    const data = await tipoService.getAllTipos()

    return data 
})

export const getTipo = createAsyncThunk(
  "tipo/get",
  async(_, thunkAPI) => {
    const data = await tipoService.getTipoById()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const updateTipo = createAsyncThunk(
  "tipo/update",
  async (tipoData, thunkAPI) => {
    const data = await tipoService.updateTipo(
      tipoData, 
      tipoData.id_tipo
    );

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);


export const tipoSlice = createSlice({
  name: "tipo",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
  builder
    .addCase(insertTipo.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(insertTipo.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.tipo = action.payload
      state.tipos.unshift(state.tipo)
      state.message = "Tipo cadastrado com sucesso!" 
    })
    .addCase(insertTipo.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
      state.tipo = {}
    })
    .addCase(deleteTipo.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(deleteTipo.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null

      state.tipos = state.tipos.filter((tipo) => {
        return tipo.id_tipo !== action.payload.id_tipo
      })

      state.message = action.payload.message
 
    })
    .addCase(getAllTipos.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getAllTipos.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.tipos = action.payload 
    })
    .addCase(getTipo.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getTipo.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.tipo = action.payload 
    })
    .addCase(updateTipo.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(updateTipo.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.message = action.payload.message;
    
      const index = state.tipos.findIndex(tipo => tipo.id_tipo === action.payload.tipo.id_tipo);
      if (index !== -1) {
        state.tipos[index] = {
          ...state.tipos[index],
          ...action.payload.tipo
        };
      }
    })
    .addCase(updateTipo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.tipo = {};
    })
    
  }
})

export const { resetMessage } = tipoSlice.actions
export default tipoSlice.reducer