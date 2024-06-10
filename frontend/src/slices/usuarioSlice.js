import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import usuarioService from "../services/usuarioService";

const initialState = {
  usuarios: [],
  usuario: {},
  error: false,
  success: false,
  loading: false,
  message: null,
}

export const insertUsuario = createAsyncThunk(
  "usuario/insert",
  async (usuario, thunkAPI) => {
    const data = await usuarioService.insertUsuario(usuario)

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const deleteUsuario = createAsyncThunk(
  "usuario/delete",
  async(id_usuario, thunkAPI) => {
    const data = await usuarioService.deleteUsuario(id_usuario)

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const getAllUsuarios = createAsyncThunk(
  "usuario/getall", 
  async(_, thunkAPI) => {
    const data = await usuarioService.getAllUsuarios()

    return data 
})

export const getUsuario = createAsyncThunk(
  "usuario/get",
  async(_, thunkAPI) => {
    const data = await usuarioService.getUsuarioById()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const updateUsuario = createAsyncThunk(
  "usuario/update",
  async (usuarioData, thunkAPI) => {
    const data = await usuarioService.updateUsuario(
      usuarioData, 
      usuarioData.id_usuario
    );

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);


export const usuarioSlice = createSlice({
  name: "usuario",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
  builder
    .addCase(insertUsuario.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(insertUsuario.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.usuario = action.payload
      state.usuarios.unshift(state.usuario)
      state.message = "Usuario cadastrado com sucesso!" 
    })
    .addCase(insertUsuario.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
      state.usuario = {}
    })
    .addCase(deleteUsuario.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(deleteUsuario.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null

      state.usuarios = state.usuarios.filter((usuario) => {
        return usuario.id_usuario !== action.payload.id_usuario
      }) 
    })
    .addCase(getAllUsuarios.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getAllUsuarios.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.usuarios = action.payload 
    })
    .addCase(getUsuario.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getUsuario.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.usuario = action.payload 
    })
    .addCase(updateUsuario.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(updateUsuario.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
    
      if (state.usuarios) { // Check if state.usuarios is defined
        const index = state.usuarios.findIndex(usuario => usuario.id_usuario === action.payload.usuario.id_usuario);
        if (index !== -1) {
          state.usuarios[index] = {
            ...state.usuario[index],
            ...action.payload.usuario
          };
        }
      }
    })    
    .addCase(updateUsuario.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.usuario = {};
    })
  }
})

export const { resetMessage } = usuarioSlice.actions
export default usuarioSlice.reducer