import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/authService";

const usuario = JSON.parse(localStorage.getItem("usuario"))

const initialState = {
  usuario: usuario ? usuario : null,
  error: false,
  success: false,
  loading: false,
}

// Logout an user
export const logout = createAsyncThunk("auth/logout", async() => {
  await authService.logout()
})

// Sign in an user
export const login = createAsyncThunk(
  "auth/login",
  async (usuario, thunkAPI) => {
    const data = await authService.login(usuario)

    // check for errors
    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false
      state.error = false
      state.success = false
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(logout.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.usuario = null
    })
    .addCase(login.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(login.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.usuario = action.payload
    })
    .addCase(login.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
      state.usuario = null
    })
  }
})

export const {reset} = authSlice.actions
export default authSlice.reducer