import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import registroService from "../services/registroService";

const initialState = {
  registros: [],
  registro: {},
  error: false,
  success: false,
  loading: false,
  message: null,
}

export const insertRegistro = createAsyncThunk(
  "registro/insert",
  async (registro, thunkAPI) => {
    const data = await registroService.insertRegistro(registro)

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const deleteRegistro = createAsyncThunk(
  "registro/delete",
  async(_, thunkAPI) => {
    const data = await registroService.deleteRegistro()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const getAllRegistros = createAsyncThunk(
  "registro/getall", 
  async(_, thunkAPI) => {
    const data = await registroService.getAllRegistros()

    return data 
})

export const getRegistro = createAsyncThunk(
  "registro/get",
  async(_, thunkAPI) => {
    const data = await registroService.getRegistroById()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const updateRegistro = createAsyncThunk(
  "registro/update",
  async (registroData, thunkAPI) => {
    const data = await registroService.updateRegistro(
      registroData, 
      registroData.id_registro
    );

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);


export const registroSlice = createSlice({
  name: "registro",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
  builder
    .addCase(insertRegistro.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(insertRegistro.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.registro = action.payload
      state.registros.unshift(state.registro)
      state.message = "Registro cadastrado com sucesso!" 
    })
    .addCase(insertRegistro.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
      state.registro = {}
    })
    .addCase(deleteRegistro.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(deleteRegistro.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null

      state.registros = state.registros.filter((registro) => {
        return registro.id_registro !== action.payload.id_registro
      })

      state.message = action.payload.message
 
    })
    .addCase(getAllRegistros.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getAllRegistros.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.registros = action.payload 
    })
    .addCase(getRegistro.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getRegistro.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.registro = action.payload 
    })
    .addCase(updateRegistro.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(updateRegistro.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.message = action.payload.message;
    
      const index = state.registros.findIndex(registro => registro.id_registro === action.payload.registro.id_registro);
      if (index !== -1) {
        state.registros[index] = {
          ...state.registros[index],
          ...action.payload.registro
        };
      }
    })
    .addCase(updateRegistro.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.registro = {};
    })
    
  }
})

export const { resetMessage } = registroSlice.actions
export default registroSlice.reducer