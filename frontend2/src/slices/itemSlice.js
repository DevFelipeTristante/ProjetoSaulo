import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import itemService from "../services/itemService";

const initialState = {
  items: [],
  item: {},
  error: false,
  success: false,
  loading: false,
  message: null,
}

export const insertItem = createAsyncThunk(
  "item/insert",
  async (item, thunkAPI) => {
    const data = await itemService.insertItem(item)

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const deleteItem = createAsyncThunk(
  "item/delete",
  async(_, thunkAPI) => {
    const data = await itemService.deleteItem()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const getAllItems = createAsyncThunk(
  "item/getall", 
  async(_, thunkAPI) => {
    const data = await itemService.getAllItems()

    return data 
})

export const getItem = createAsyncThunk(
  "item/get",
  async(_, thunkAPI) => {
    const data = await itemService.getItemById()

    if(data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

export const updateItem = createAsyncThunk(
  "item/update",
  async (itemData, thunkAPI) => {
    const data = await itemService.updateItem(
      itemData, 
      itemData.id_item
    );

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);


export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
  builder
    .addCase(insertItem.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(insertItem.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.item = action.payload
      state.items.unshift(state.item)
      state.message = "Item cadastrado com sucesso!" 
    })
    .addCase(insertItem.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
      state.item = {}
    })
    .addCase(deleteItem.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(deleteItem.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null

      state.items = state.items.filter((item) => {
        return item.id_item !== action.payload.id_item
      })

      state.message = action.payload.message
 
    })
    .addCase(getAllItems.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getAllItems.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.items = action.payload 
    })
    .addCase(getItem.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(getItem.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.error = null
      state.item = action.payload 
    })
    .addCase(updateItem.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(updateItem.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.message = action.payload.message;
    
      const index = state.items.findIndex(item => item.id_item === action.payload.item.id_item);
      if (index !== -1) {
        state.items[index] = {
          ...state.items[index],
          ...action.payload.item
        };
      }
    })
    .addCase(updateItem.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.item = {};
    })
    
  }
})

export const { resetMessage } = itemSlice.actions
export default itemSlice.reducer