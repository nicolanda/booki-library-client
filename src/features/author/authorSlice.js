import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authorServiceAxios from '../../services/api/books/authorServiceAxios';
// import { fetcherAuthor } from '../../services/api/books/authorsService';

const initialState = {
  data: [],
  status: 'idle',
  error: null
};

// export const getAllAuthors = createAsyncThunk(
//   'author/getAllAuthors',
//   async () => {
//     const res = await fetcherAuthor({
//       method: 'GET',
//       endPoint: 'author'
//     });
//     return res;
//   }
// );

export const createAuthors = createAsyncThunk(
  'author/createAuthors',
  async (data) => {
    const res = await authorServiceAxios.create(data);
    return res.data;
  }
);

export const getAllAuthors = createAsyncThunk(
  'authors/getAllAuthors',
  async () => {
    const res = await authorServiceAxios.getAll();
    return res.data;
  }
);

export const updateAuthor = createAsyncThunk(
  'authors/updateAuthor',
  async (id, data) => {
    const res = await authorServiceAxios.update(id, data);
    return res.data;
  }
);

export const deleteAuthor = createAsyncThunk(
  'authors/deleteAuthor',
  async (id) => {
    const res = await authorServiceAxios.delete(id);
    return res.data;
  }
);

const authorSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAuthors.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(getAllAuthors.fulfilled, (state, action) => {
        // state.data = action.payload;
        // return state;
        return {
          ...state,
          data: action.payload
        };
      })
      .addCase(updateAuthor.fulfilled, (state, action) => {
        const index = state.data.findIndex(
          (author) => author.id === action.payload.id
        );
        state[index] = {
          ...state[index],
          ...action.payload
        };
      })
      .addCase(deleteAuthor.fulfilled, (state, action) => {
        return {
          data: state.data.filter(
            (author) => author.id !== action.payload.id
          )
        };
      });
  }
});

export const selectAllAuthors = (state) => state.authors.data;
export default authorSlice.reducer;
