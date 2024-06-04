import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import comissaoService from "../services/comissaoService";

const initialState = {
  comissaos: [],
  comissao: {},
  error: false,
  success: false,
  loading: false,
  message: null,
}

export const insertComissao = createAsyncThunk(
  "comissao/insert",
  async (comissao, thunkAPI) => {
    const data = await comissaoService.insertComissao(comissao)

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const deleteComissao = createAsyncThunk(
  "comissao/delete",
  async(_, thunkAPI) => {
    const data = await comissaoService.deleteComissao()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const getAllComissaos = createAsyncThunk(
  "comissao/getall", 
  async(_, thunkAPI) => {
    const data = await comissaoService.getAllComissaos()

    return data 
})

export const getComissao = createAsyncThunk(
  "comissao/get",
  async(_, thunkAPI) => {
    const data = await comissaoService.getComissaoById()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const updateComissao = createAsyncThunk(
  "comissao/update",
  async (comissaoData, thunkAPI) => {
    const data = await comissaoService.updateComissao(
      comissaoData, 
      comissaoData.id_comissao
    );

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);


export const comissaoSlice = createSlice({
  name: "comissao",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
  builder
    .addCase(insertComissao.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(insertComissao.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.comissao = action.payload
      state.comissaos.unshift(state.comissao)
      state.message = "Comissão cadastrado com sucesso!" 
    })
    .addCase(insertComissao.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
      state.comissao = {}
    })
    .addCase(deleteComissao.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(deleteComissao.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null

      state.comissaos = state.comissaos.filter((comissao) => {
        return comissao.id_comissao !== action.payload.id_comissao
      })

      state.message = action.payload.message
 
    })
    .addCase(getAllComissaos.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getAllComissaos.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.comissaos = action.payload 
    })
    .addCase(getComissao.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getComissao.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.comissao = action.payload 
    })
    .addCase(updateComissao.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(updateComissao.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.message = action.payload.message;
    
      const index = state.comissaos.findIndex(comissao => comissao.id_comissao === action.payload.comissao.id_comissao);
      if (index !== -1) {
        state.comissaos[index] = {
          ...state.comissaos[index],
          ...action.payload.comissao
        };
      }
    })
    .addCase(updateComissao.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.comissao = {};
    })
    
  }
})

export const { resetMessage } = comissaoSlice.actions
export default comissaoSlice.reducer