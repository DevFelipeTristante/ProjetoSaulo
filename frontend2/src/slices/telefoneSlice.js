import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import telefoneService from "../services/telefoneService";

const initialState = {
  telefones: [],
  telefone: {},
  error: false,
  success: false,
  loading: false,
  message: null,
}

export const insertTelefone = createAsyncThunk(
  "telefone/insert",
  async (telefone, thunkAPI) => {
    const data = await telefoneService.insertTelefone(telefone)

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const deleteTelefone = createAsyncThunk(
  "telefone/delete",
  async(_, thunkAPI) => {
    const data = await telefoneService.deleteTelefone()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const getAllTelefones = createAsyncThunk(
  "telefone/getall", 
  async(_, thunkAPI) => {
    const data = await telefoneService.getAllTelefones()

    return data 
})

export const getTelefone = createAsyncThunk(
  "telefone/get",
  async(_, thunkAPI) => {
    const data = await telefoneService.getTelefoneById()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const updateTelefone = createAsyncThunk(
  "telefone/update",
  async (telefoneData, thunkAPI) => {
    const data = await telefoneService.updateTelefone(
      telefoneData, 
      telefoneData.id_telefone
    );

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);


export const telefoneSlice = createSlice({
  name: "telefone",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
  builder
    .addCase(insertTelefone.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(insertTelefone.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.telefone = action.payload
      state.telefones.unshift(state.telefone)
      state.message = "Telefone cadastrado com sucesso!" 
    })
    .addCase(insertTelefone.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
      state.telefone = {}
    })
    .addCase(deleteTelefone.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(deleteTelefone.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null

      state.telefones = state.telefones.filter((telefone) => {
        return telefone.id_telefone !== action.payload.id_telefone
      })

      state.message = action.payload.message
 
    })
    .addCase(getAllTelefones.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getAllTelefones.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.telefones = action.payload 
    })
    .addCase(getTelefone.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getTelefone.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.telefone = action.payload 
    })
    .addCase(updateTelefone.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(updateTelefone.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.message = action.payload.message;
    
      const index = state.telefones.findIndex(telefone => telefone.id_telefone === action.payload.telefone.id_telefone);
      if (index !== -1) {
        state.telefones[index] = {
          ...state.telefones[index],
          ...action.payload.telefone
        };
      }
    })
    .addCase(updateTelefone.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.telefone = {};
    })
    
  }
})

export const { resetMessage } = telefoneSlice.actions
export default telefoneSlice.reducer