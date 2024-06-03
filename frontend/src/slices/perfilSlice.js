import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import perfilService from "../services/perfilService";

const initialState = {
  perfils: [],
  perfil: {},
  error: false,
  success: false,
  loading: false,
  message: null,
}

export const insertPerfil = createAsyncThunk(
  "perfil/insert",
  async (perfil, thunkAPI) => {
    const data = await perfilService.insertPerfil(perfil)

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const deletePerfil = createAsyncThunk(
  "perfil/delete",
  async(_, thunkAPI) => {
    const data = await perfilService.deletePerfil()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const getAllPerfils = createAsyncThunk(
  "perfil/getall", 
  async(_, thunkAPI) => {
    const data = await perfilService.getAllPerfils()

    return data 
})

export const getPerfil = createAsyncThunk(
  "perfil/get",
  async(_, thunkAPI) => {
    const data = await perfilService.getPerfilById()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const updatePerfil = createAsyncThunk(
  "perfil/update",
  async (perfilData, thunkAPI) => {
    const data = await perfilService.updatePerfil(
      perfilData, 
      perfilData.id_perfil
    );

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);


export const perfilSlice = createSlice({
  name: "perfil",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
  builder
    .addCase(insertPerfil.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(insertPerfil.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.perfil = action.payload
      state.perfils.unshift(state.perfil)
      state.message = "Perfil cadastrado com sucesso!" 
    })
    .addCase(insertPerfil.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
      state.perfil = {}
    })
    .addCase(deletePerfil.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(deletePerfil.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null

      state.perfils = state.perfils.filter((perfil) => {
        return perfil.id_perfil !== action.payload.id_perfil
      })

      state.message = action.payload.message
 
    })
    .addCase(getAllPerfils.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getAllPerfils.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.perfils = action.payload 
    })
    .addCase(getPerfil.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getPerfil.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.perfil = action.payload 
    })
    .addCase(updatePerfil.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(updatePerfil.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.message = action.payload.message;
    
      const index = state.perfils.findIndex(perfil => perfil.id_perfil === action.payload.perfil.id_perfil);
      if (index !== -1) {
        state.perfils[index] = {
          ...state.perfils[index],
          ...action.payload.perfil
        };
      }
    })
    .addCase(updatePerfil.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.perfil = {};
    })
    
  }
})

export const { resetMessage } = perfilSlice.actions
export default perfilSlice.reducer