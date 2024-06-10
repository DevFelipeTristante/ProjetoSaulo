import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fornecedorService from "../services/fornecedorService";

const initialState = {
  fornecedors: [],
  fornecedor: {},
  error: false,
  success: false,
  loading: false,
  message: null,
};

export const insertFornecedor = createAsyncThunk(
  "fornecedor/insert",
  async (fornecedor, thunkAPI) => {
    const data = await fornecedorService.insertFornecedor(fornecedor);

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

export const deleteFornecedor = createAsyncThunk(
  "fornecedor/delete",
  async (id_fornecedor, thunkAPI) => {
    const data = await fornecedorService.deleteFornecedor(id_fornecedor);

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

export const getAllFornecedors = createAsyncThunk(
  "fornecedor/getall",
  async (_, thunkAPI) => {
    const data = await fornecedorService.getAllFornecedors();

    return data;
  }
);

export const getFornecedor = createAsyncThunk(
  "fornecedor/get",
  async (_, thunkAPI) => {
    const data = await fornecedorService.getFornecedorById();

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

export const updateFornecedor = createAsyncThunk(
  "fornecedor/update",
  async (fornecedorData, thunkAPI) => {
    const data = await fornecedorService.updateFornecedor(
      fornecedorData,
      fornecedorData.id_fornecedor
    );

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

export const fornecedorSlice = createSlice({
  name: "fornecedor",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(insertFornecedor.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(insertFornecedor.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.fornecedor = action.payload;
        state.fornecedors.unshift(state.fornecedor);
        state.message = "Fornecedor cadastrado com sucesso!";
      })
      .addCase(insertFornecedor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.fornecedor = {};
      })
      .addCase(deleteFornecedor.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteFornecedor.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;

        state.fornecedors = state.fornecedors.filter((fornecedor) => {
          return fornecedor.id_fornecedor !== action.payload.id_fornecedor;
        });
      })
      .addCase(getAllFornecedors.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getAllFornecedors.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.fornecedors = action.payload;
      })
      .addCase(getFornecedor.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getFornecedor.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.fornecedor = action.payload;
      })
      .addCase(updateFornecedor.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(updateFornecedor.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;

        const index = state.fornecedors.findIndex(
          (fornecedor) => fornecedor.id_fornecedor === action.payload.fornecedor.id_fornecedor
        );
        if (index !== -1) {
          state.fornecedors[index] = {
            ...state.fornecedors[index],
            ...action.payload.fornecedor,
          };
        }
      })
      .addCase(updateFornecedor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.fornecedor = {};
      });
  },
});

export const { resetMessage } = fornecedorSlice.actions;
export default fornecedorSlice.reducer;
