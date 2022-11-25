import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react';

const url = 'http://localhost:5000/api/';
export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => '/category',
      providesTags: ['Category']
    }),

    createCategory: builder.mutation({
      query: (payload) => ({
        url: '/category',
        method: 'POST',
        body: payload
      })
    })
  })
});

export const { useGetAllCategoriesQuery, useCreateCategoryMutation } =
  categoryApi;
