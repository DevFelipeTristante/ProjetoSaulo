import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import formaService from "../services/formaService";

const initialState = {
  formas: [],
  forma: {},
  error: false,
  success: false,
  loading: false,
  message: null,
}

export const insertForma = createAsyncThunk(
  "forma/insert",
  async (forma, thunkAPI) => {
    const data = await formaService.insertForma(forma)

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const deleteForma = createAsyncThunk(
  "forma/delete",
  async(_, thunkAPI) => {
    const data = await formaService.deleteForma()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const getAllFormas = createAsyncThunk(
  "forma/getall", 
  async(_, thunkAPI) => {
    const data = await formaService.getAllFormas()

    return data 
})

export const getForma = createAsyncThunk(
  "forma/get",
  async(_, thunkAPI) => {
    const data = await formaService.getFormaById()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const updateForma = createAsyncThunk(
  "forma/update",
  async (formaData, thunkAPI) => {
    const data = await formaService.updateForma(
      formaData, 
      formaData.id_forma
    );

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);


export const formaSlice = createSlice({
  name: "forma",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
  builder
    .addCase(insertForma.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(insertForma.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.forma = action.payload
      state.formas.unshift(state.forma)
      state.message = "Forma cadastrado com sucesso!" 
    })
    .addCase(insertForma.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
      state.forma = {}
    })
    .addCase(deleteForma.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(deleteForma.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null

      state.formas = state.formas.filter((forma) => {
        return forma.id_forma !== action.payload.id_forma
      })

      state.message = action.payload.message
 
    })
    .addCase(getAllFormas.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getAllFormas.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.formas = action.payload 
    })
    .addCase(getForma.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getForma.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.forma = action.payload 
    })
    .addCase(updateForma.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(updateForma.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.message = action.payload.message;
    
      const index = state.formas.findIndex(forma => forma.id_forma === action.payload.forma.id_forma);
      if (index !== -1) {
        state.formas[index] = {
          ...state.formas[index],
          ...action.payload.forma
        };
      }
    })
    .addCase(updateForma.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.forma = {};
    })
    
  }
})

export const { resetMessage } = formaSlice.actions
export default formaSlice.reducer