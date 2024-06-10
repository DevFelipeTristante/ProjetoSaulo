import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tabelaService from "../services/tabelaService";

const initialState = {
  tabelas: [],
  tabela: {},
  error: false,
  success: false,
  loading: false,
  message: null,
}

export const insertTabela = createAsyncThunk(
  "tabela/insert",
  async (tabela, thunkAPI) => {
    const data = await tabelaService.insertTabela(tabela)

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const deleteTabela = createAsyncThunk(
  "tabela/delete",
  async(_, thunkAPI) => {
    const data = await tabelaService.deleteTabela()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const getAllTabelas = createAsyncThunk(
  "tabela/getall", 
  async(_, thunkAPI) => {
    const data = await tabelaService.getAllTabelas()

    return data 
})

export const getTabela = createAsyncThunk(
  "tabela/get",
  async(_, thunkAPI) => {
    const data = await tabelaService.getTabelaById()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const updateTabela = createAsyncThunk(
  "tabela/update",
  async (tabelaData, thunkAPI) => {
    const data = await tabelaService.updateTabela(
      tabelaData, 
      tabelaData.id_tabela
    );

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);


export const tabelaSlice = createSlice({
  name: "tabela",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
  builder
    .addCase(insertTabela.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(insertTabela.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.tabela = action.payload
      state.tabelas.unshift(state.tabela)
      state.message = "Tabela cadastrado com sucesso!" 
    })
    .addCase(insertTabela.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
      state.tabela = {}
    })
    .addCase(deleteTabela.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(deleteTabela.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null

      state.tabelas = state.tabelas.filter((tabela) => {
        return tabela.id_tabela !== action.payload.id_tabela
      }) 
    })
    .addCase(getAllTabelas.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getAllTabelas.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.tabelas = action.payload 
    })
    .addCase(getTabela.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getTabela.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.tabela = action.payload 
    })
    .addCase(updateTabela.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(updateTabela.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
    
      const index = state.tabelas.findIndex(tabela => tabela.id_tabela === action.payload.tabela.id_tabela);
      if (index !== -1) {
        state.tabelas[index] = {
          ...state.tabelas[index],
          ...action.payload.tabela
        };
      }
    })
    .addCase(updateTabela.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.tabela = {};
    })
    
  }
})

export const { resetMessage } = tabelaSlice.actions
export default tabelaSlice.reducer