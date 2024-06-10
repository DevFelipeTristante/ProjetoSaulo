import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import clienteService from "../services/clienteService";

const initialState = {
  clientes: [],
  cliente: {},
  error: false,
  success: false,
  loading: false,
  message: null,
}

export const insertCliente = createAsyncThunk(
  "cliente/insert",
  async (cliente, thunkAPI) => {
    const data = await clienteService.insertCliente(cliente)

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const deleteCliente = createAsyncThunk(
  "cliente/delete",
  async(id_cliente, thunkAPI) => {
    const data = await clienteService.deleteCliente(id_cliente)

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const getAllClientes = createAsyncThunk(
  "cliente/getall", 
  async(_, thunkAPI) => {
    const data = await clienteService.getAllClientes()

    return data 
})

export const getCliente = createAsyncThunk(
  "cliente/get",
  async(_, thunkAPI) => {
    const data = await clienteService.getClienteById()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const updateCliente = createAsyncThunk(
  "cliente/update",
  async (clienteData, thunkAPI) => {
    const data = await clienteService.updateCliente(
      clienteData, 
      clienteData.id_cliente
    );

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);


export const clienteSlice = createSlice({
  name: "cliente",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
  builder
    .addCase(insertCliente.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(insertCliente.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.cliente = action.payload
      state.clientes.unshift(state.cliente)
      state.message = "Cliente cadastrado com sucesso!" 
    })
    .addCase(insertCliente.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
      state.cliente = {}
    })
    .addCase(deleteCliente.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(deleteCliente.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null

      state.clientes = state.clientes.filter((cliente) => {
        return cliente.id_cliente !== action.payload.id_cliente
      }) 
    })
    .addCase(getAllClientes.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getAllClientes.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.clientes = action.payload 
    })
    .addCase(getCliente.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getCliente.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.cliente = action.payload 
    })
    .addCase(updateCliente.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(updateCliente.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
    
      const index = state.clientes.findIndex(cliente => cliente.id_cliente === action.payload.cliente.id_cliente);
      if (index !== -1) {
        state.clientes[index] = {
          ...state.clientes[index],
          ...action.payload.cliente
        };
      }
    })
    .addCase(updateCliente.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.cliente = {};
    })
    
  }
})

export const { resetMessage } = clienteSlice.actions
export default clienteSlice.reducer