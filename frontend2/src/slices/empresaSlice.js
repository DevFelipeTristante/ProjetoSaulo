import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import empresaService from "../services/empresaService";

const initialState = {
  empresas: [],
  empresa: {},
  error: false,
  success: false,
  loading: false,
  message: null,
}

export const insertEmpresa = createAsyncThunk(
  "empresa/insert",
  async (empresa, thunkAPI) => {
    const data = await empresaService.insertEmpresa(empresa)

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const deleteEmpresa = createAsyncThunk(
  "empresa/delete",
  async(_, thunkAPI) => {
    const data = await empresaService.deleteEmpresa()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const getAllEmpresas = createAsyncThunk(
  "empresa/getall", 
  async(_, thunkAPI) => {
    const data = await empresaService.getAllEmpresas()

    return data 
})

export const getEmpresa = createAsyncThunk(
  "empresa/get",
  async(_, thunkAPI) => {
    const data = await empresaService.getEmpresaById()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const updateEmpresa = createAsyncThunk(
  "empresa/update",
  async (empresaData, thunkAPI) => {
    const data = await empresaService.updateEmpresa(
      empresaData, 
      empresaData.id_empresa
    );

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);


export const empresaSlice = createSlice({
  name: "empresa",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
  builder
    .addCase(insertEmpresa.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(insertEmpresa.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.empresa = action.payload
      state.empresas.unshift(state.empresa)
      state.message = "Empresa cadastrado com sucesso!" 
    })
    .addCase(insertEmpresa.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
      state.empresa = {}
    })
    .addCase(deleteEmpresa.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(deleteEmpresa.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null

      state.empresas = state.empresas.filter((empresa) => {
        return empresa.id_empresa !== action.payload.id_empresa
      })

      state.message = action.payload.message
 
    })
    .addCase(getAllEmpresas.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getAllEmpresas.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.empresas = action.payload 
    })
    .addCase(getEmpresa.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getEmpresa.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.empresa = action.payload 
    })
    .addCase(updateEmpresa.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(updateEmpresa.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.message = action.payload.message;
    
      const index = state.empresas.findIndex(empresa => empresa.id_empresa === action.payload.empresa.id_empresa);
      if (index !== -1) {
        state.empresas[index] = {
          ...state.empresas[index],
          ...action.payload.empresa
        };
      }
    })
    .addCase(updateEmpresa.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.empresa = {};
    })
    
  }
})

export const { resetMessage } = empresaSlice.actions
export default empresaSlice.reducer