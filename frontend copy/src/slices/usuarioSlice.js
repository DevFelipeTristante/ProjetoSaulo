import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"

import usuarioService from "../services/usuarioService"

const initialState = {
  usuarios: [],
  usuario: {},
  error: false,
  success: false,
  loading: false,
  message: null
}

// Get usuario details
export const profile = createAsyncThunk(
  "usuario/profile",
  async(usuario, thunkAPI) => {
    const data = await usuarioService.profile(usuario)
    
    return data
  }
) 

export const usuarioSlice = createSlice({
  name: "usuario", 
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(profile.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(profile.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.usuario = action.payload
    })
  }
}) 

export const {resetMessage} = usuarioSlice.actions
export default usuarioSlice.reducer