import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import compraService from "../services/compraService";

const initialState = {
  compras: [],
  compra: {},
  error: false,
  success: false,
  loading: false,
  message: null,
}

export const insertCompra = createAsyncThunk(
  "compra/insert",
  async (compra, thunkAPI) => {
    const data = await compraService.insertCompra(compra)

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const deleteCompra = createAsyncThunk(
  "compra/delete",
  async(_, thunkAPI) => {
    const data = await compraService.deleteCompra()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const getAllCompras = createAsyncThunk(
  "compra/getall", 
  async(_, thunkAPI) => {
    const data = await compraService.getAllCompras()

    return data 
})

export const getCompra = createAsyncThunk(
  "compra/get",
  async(_, thunkAPI) => {
    const data = await compraService.getCompraById()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const updateCompra = createAsyncThunk(
  "compra/update",
  async (compraData, thunkAPI) => {
    const data = await compraService.updateCompra(
      compraData, 
      compraData.numeroNF
    );

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);


export const compraSlice = createSlice({
  name: "compra",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
  builder
    .addCase(insertCompra.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(insertCompra.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.compra = action.payload
      state.compras.unshift(state.compra)
      state.message = "Compra cadastrado com sucesso!" 
    })
    .addCase(insertCompra.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
      state.compra = {}
    })
    .addCase(deleteCompra.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(deleteCompra.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null

      state.compras = state.compras.filter((compra) => {
        return compra.numeroNF !== action.payload.numeroNF
      })

      state.message = action.payload.message
 
    })
    .addCase(getAllCompras.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getAllCompras.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.compras = action.payload 
    })
    .addCase(getCompra.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getCompra.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.compra = action.payload 
    })
    .addCase(updateCompra.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(updateCompra.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.message = action.payload.message;
    
      const index = state.compras.findIndex(compra => compra.numeroNF === action.payload.compra.numeroNF);
      if (index !== -1) {
        state.compras[index] = {
          ...state.compras[index],
          ...action.payload.compra
        };
      }
    })
    .addCase(updateCompra.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.compra = {};
    })
    
  }
})

export const { resetMessage } = compraSlice.actions
export default compraSlice.reducer