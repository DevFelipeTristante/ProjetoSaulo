import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cidadeService from "../services/cidadeService";

const initialState = {
  cidades: [],
  cidade: {},
  error: false,
  success: false,
  loading: false,
  message: null,
}

export const insertCidade = createAsyncThunk(
  "cidade/insert",
  async (cidade, thunkAPI) => {
    const data = await cidadeService.insertCidade(cidade)

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const deleteCidade = createAsyncThunk(
  "cidade/delete",
  async(_, thunkAPI) => {
    const data = await cidadeService.deleteCidade()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const getAllCidades = createAsyncThunk(
  "cidade/getall", 
  async(_, thunkAPI) => {
    const data = await cidadeService.getAllCidades()

    return data 
})

export const getCidade = createAsyncThunk(
  "cidade/get",
  async(_, thunkAPI) => {
    const data = await cidadeService.getCidadeById()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const updateCidade = createAsyncThunk(
  "cidade/update",
  async (cidadeData, thunkAPI) => {
    const data = await cidadeService.updateCidade(
      cidadeData, 
      cidadeData.id_cidade
    );

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);


export const cidadeSlice = createSlice({
  name: "cidade",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
  builder
    .addCase(insertCidade.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(insertCidade.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.cidade = action.payload
      state.cidades.unshift(state.cidade)
      state.message = "Cidade cadastrado com sucesso!" 
    })
    .addCase(insertCidade.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
      state.cidade = {}
    })
    .addCase(deleteCidade.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(deleteCidade.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null

      state.cidades = state.cidades.filter((cidade) => {
        return cidade.id_cidade !== action.payload.id_cidade
      })

      state.message = action.payload.message
 
    })
    .addCase(getAllCidades.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getAllCidades.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.cidades = action.payload 
    })
    .addCase(getCidade.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getCidade.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.cidade = action.payload 
    })
    .addCase(updateCidade.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(updateCidade.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.message = action.payload.message;
    
      const index = state.cidades.findIndex(cidade => cidade.id_cidade === action.payload.cidade.id_cidade);
      if (index !== -1) {
        state.cidades[index] = {
          ...state.cidades[index],
          ...action.payload.cidade
        };
      }
    })
    .addCase(updateCidade.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.cidade = {};
    })
    
  }
})

export const { resetMessage } = cidadeSlice.actions
export default cidadeSlice.reducer