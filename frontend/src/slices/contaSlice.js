import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import contaService from "../services/contaService";

const initialState = {
  contas: [],
  conta: {},
  error: false,
  success: false,
  loading: false,
  message: null,
}

export const insertConta = createAsyncThunk(
  "conta/insert",
  async (conta, thunkAPI) => {
    const data = await contaService.insertConta(conta)

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const deleteConta = createAsyncThunk(
  "conta/delete",
  async(_, thunkAPI) => {
    const data = await contaService.deleteConta()
    
    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const getAllContas = createAsyncThunk(
  "conta/getall", 
  async(_, thunkAPI) => {
    const data = await contaService.getAllContas()

    return data 
})

export const getConta = createAsyncThunk(
  "conta/get",
  async(_, thunkAPI) => {
    const data = await contaService.getContaById()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const updateConta = createAsyncThunk(
  "conta/update",
  async (contaData, thunkAPI) => {
    const data = await contaService.updateConta(
      contaData, 
      contaData.id_conta
    );

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);


export const contaSlice = createSlice({
  name: "conta",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
  builder
    .addCase(insertConta.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(insertConta.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.conta = action.payload
      state.contas.unshift(state.conta)
      state.message = "Conta cadastrado com sucesso!" 
    })
    .addCase(insertConta.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
      state.conta = {}
    })
    .addCase(deleteConta.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(deleteConta.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null

      state.contas = state.contas.filter((conta) => {
        return conta.id_conta !== action.payload.id_conta
      })

      state.message = action.payload.message
 
    })
    .addCase(getAllContas.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getAllContas.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.contas = action.payload 
    })
    .addCase(getConta.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getConta.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.conta = action.payload 
    })
    .addCase(updateConta.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(updateConta.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.message = action.payload.message;
    
      const index = state.contas.findIndex(conta => conta.id_conta === action.payload.conta.id_conta);
      if (index !== -1) {
        state.contas[index] = {
          ...state.contas[index],
          ...action.payload.conta
        };
      }
    })
    .addCase(updateConta.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.conta = {};
    })
    
  }
})

export const { resetMessage } = contaSlice.actions
export default contaSlice.reducer