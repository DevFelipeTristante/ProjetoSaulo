import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import vendaService from "../services/vendaService";

const initialState = {
  vendas: [],
  venda: {},
  error: false,
  success: false,
  loading: false,
  message: null,
}

export const insertVenda = createAsyncThunk(
  "venda/insert",
  async (venda, thunkAPI) => {
    const data = await vendaService.insertVenda(venda)

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const deleteVenda = createAsyncThunk(
  "venda/delete",
  async(_, thunkAPI) => {
    const data = await vendaService.deleteVenda()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const getAllVendas = createAsyncThunk(
  "venda/getall", 
  async(_, thunkAPI) => {
    const data = await vendaService.getAllVendas()

    return data 
})

export const getVenda = createAsyncThunk(
  "venda/get",
  async(_, thunkAPI) => {
    const data = await vendaService.getVendaById()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const updateVenda = createAsyncThunk(
  "venda/update",
  async (vendaData, thunkAPI) => {
    const data = await vendaService.updateVenda(
      vendaData, 
      vendaData.id_venda
    );

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);


export const vendaSlice = createSlice({
  name: "venda",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
  builder
    .addCase(insertVenda.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(insertVenda.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.venda = action.payload
      state.vendas.unshift(state.venda)
      state.message = "Venda cadastrado com sucesso!" 
    })
    .addCase(insertVenda.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
      state.venda = {}
    })
    .addCase(deleteVenda.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(deleteVenda.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null

      state.vendas = state.vendas.filter((venda) => {
        return venda.id_venda !== action.payload.id_venda
      })

      state.message = action.payload.message
 
    })
    .addCase(getAllVendas.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getAllVendas.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.vendas = action.payload 
    })
    .addCase(getVenda.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getVenda.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.venda = action.payload 
    })
    .addCase(updateVenda.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(updateVenda.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.message = action.payload.message;
    
      const index = state.vendas.findIndex(venda => venda.id_venda === action.payload.venda.id_venda);
      if (index !== -1) {
        state.vendas[index] = {
          ...state.vendas[index],
          ...action.payload.venda
        };
      }
    })
    .addCase(updateVenda.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.venda = {};
    })
    
  }
})

export const { resetMessage } = vendaSlice.actions
export default vendaSlice.reducer