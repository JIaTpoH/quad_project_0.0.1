import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const getCategories = createAsyncThunk('categories/getCategories',
  async(  thunkAPI) => {
  try {
    const res = await axios(`${Base_URL}/categories`);
    return res.data;

  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue(err);
  }
}
);

const initialState = {
  list: [],
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    list: [],
    isLoading: false
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.list = action.payload;
      state.isLoading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.list = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getCategories.rejected, (state) => {
      state.list = action.payload;
      state.isLoading = false;
    });
    
  }
});

export default categoriesSlice.reducer;