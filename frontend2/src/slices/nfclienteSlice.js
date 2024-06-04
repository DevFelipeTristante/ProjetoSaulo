import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import nfclienteService from "../services/nfclienteService";

const initialState = {
  nfclientes: [],
  nfcliente: {},
  error: false,
  success: false,
  loading: false,
  message: null,
}

export const insertNfcliente = createAsyncThunk(
  "nfcliente/insert",
  async (nfcliente, thunkAPI) => {
    const data = await nfclienteService.insertNfcliente(nfcliente)

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const deleteNfcliente = createAsyncThunk(
  "nfcliente/delete",
  async(_, thunkAPI) => {
    const data = await nfclienteService.deleteNfcliente()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const getAllNfclientes = createAsyncThunk(
  "nfcliente/getall", 
  async(_, thunkAPI) => {
    const data = await nfclienteService.getAllNfclientes()

    return data 
})

export const getNfcliente = createAsyncThunk(
  "nfcliente/get",
  async(_, thunkAPI) => {
    const data = await nfclienteService.getNfclienteById()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const updateNfcliente = createAsyncThunk(
  "nfcliente/update",
  async (nfclienteData, thunkAPI) => {
    const data = await nfclienteService.updateNfcliente(
      nfclienteData, 
      nfclienteData.numeroNF
    );

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);


export const nfclienteSlice = createSlice({
  name: "nfcliente",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
  builder
    .addCase(insertNfcliente.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(insertNfcliente.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.nfcliente = action.payload
      state.nfclientes.unshift(state.nfcliente)
      state.message = "Nfcliente cadastrado com sucesso!" 
    })
    .addCase(insertNfcliente.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
      state.nfcliente = {}
    })
    .addCase(deleteNfcliente.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(deleteNfcliente.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null

      state.nfclientes = state.nfclientes.filter((nfcliente) => {
        return nfcliente.numeroNF !== action.payload.numeroNF
      })

      state.message = action.payload.message
 
    })
    .addCase(getAllNfclientes.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getAllNfclientes.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.nfclientes = action.payload 
    })
    .addCase(getNfcliente.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getNfcliente.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.nfcliente = action.payload 
    })
    .addCase(updateNfcliente.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(updateNfcliente.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.message = action.payload.message;
    
      const index = state.nfclientes.findIndex(nfcliente => nfcliente.numeroNF === action.payload.nfcliente.numeroNF);
      if (index !== -1) {
        state.nfclientes[index] = {
          ...state.nfclientes[index],
          ...action.payload.nfcliente
        };
      }
    })
    .addCase(updateNfcliente.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.nfcliente = {};
    })
    
  }
})

export const { resetMessage } = nfclienteSlice.actions
export default nfclienteSlice.reducer