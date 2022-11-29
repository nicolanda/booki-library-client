import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react';

const url = 'http://localhost:5000/api/';
export const bookiApi = createApi({
  reducerPath: 'bookiApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url
  }),
  endpoints: (builder) => ({
    // ! autores
    getAllAuthors: builder.query({
      query: () => '/author',
      providesTags: ['Author']
    }),
    createAuthor: builder.mutation({
      query: ([newAuthor]) => ({
        url: '/author',
        method: 'POST',
        body: [newAuthor]
      }),
      invalidatesTags: ['Author']
    }),
    updateAuthor: builder.mutation({
      query: (updateAuthor) => ({
        url: `/author/${updateAuthor.id}`,
        method: 'PUT',
        body: updateAuthor
      }),
      invalidatesTags: ['Author']
    }),
    deleteAuthor: builder.mutation({
      query: (id) => ({
        url: `/author/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Author']
    }),
    // ! categorias
    getAllCategories: builder.query({
      query: () => '/category',
      providesTags: ['Category']
    }),
    createCategory: builder.mutation({
      query: (newCategory) => ({
        url: '/category',
        method: 'POST',
        body: newCategory
      }),
      invalidatesTags: ['Category'],
      extraOptions: { maxRetries: 0 }
    }),
    updateCategory: builder.mutation({
      query: (updateCategory) => ({
        url: `/category/${updateCategory.id}`,
        method: 'PUT',
        body: updateCategory
      }),
      invalidatesTags: ['Category']
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Category']
    }),
    // ! impuesto libros
    getAllTaxes: builder.query({
      query: () => '/priceTax',
      providesTags: ['priceTax']
    }),
    createTaxes: builder.mutation({
      query: (newTax) => ({
        url: '/priceTax',
        method: 'POST',
        body: newTax
      }),
      invalidatesTags: ['priceTax']
    }),
    updateTaxes: builder.mutation({
      query: (updateTax) => ({
        url: `/priceTax/${updateTax.id}`,
        method: 'PUT',
        body: updateTax
      }),
      invalidatesTags: ['priceTax']
    }),
    deleteTaxes: builder.mutation({
      query: (id) => ({
        url: `/priceTax/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['priceTax']
    })
  })
});

export const {
  useGetAllCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllAuthorsQuery,
  useCreateAuthorMutation,
  useUpdateAuthorMutation,
  useDeleteAuthorMutation,
  useGetAllTaxesQuery,
  useCreateTaxesMutation,
  useUpdateTaxesMutation,
  useDeleteTaxesMutation
} = bookiApi;
