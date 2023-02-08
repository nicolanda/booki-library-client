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
  keepUnusedDataFor: 60,
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    //!!usuario
    // ? usuarios
    createUser: builder.mutation({
      query: (newUser) => ({
        url: '/lead',
        method: 'POST',
        body: newUser
      })
    }),
    loginUser: builder.mutation({
      query: (user) => ({
        url: '/login',
        method: 'POST',
        body: user
      })
    }),
    // ? componentes del usuario
    getAllIdentificationsTypes: builder.query({
      query: () => '/identificationType',
      providesTags: ['IdentificationType']
    }),
    // !libros
    getAllBooks: builder.query({
      query: () => '/book',
      providesTags: ['Books']
    }),
    getBookById: builder.query({
      query: (id) => `/book/${id}`
    }),
    createBook: builder.mutation({
      query: (newBook) => ({
        url: '/book',
        method: 'POST',
        body: newBook
      }),
      invalidatesTags: [
        'Books',
        'Author',
        'Category',
        'Tax',
        'Discount'
      ]
    }),
    updateBook: builder.mutation({
      query: (book) => ({
        url: `/book/${book.id}`,
        method: 'PUT',
        body: book
      }),
      invalidatesTags: [
        'Books',
        'Author',
        'Category',
        'Tax',
        'Discount'
      ]
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/book/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Books']
    }),
    // ! autores
    getAllAuthors: builder.query({
      query: () => '/author',
      providesTags: ['Author']
    }),
    createAuthor: builder.mutation({
      query: (newAuthor) => ({
        url: '/author',
        method: 'POST',
        body: newAuthor
      }),
      invalidatesTags: ['Author'],
      extraOptions: { maxRetries: 0 }
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
    }),
    // ! descuentos
    getAllDiscounts: builder.query({
      query: () => '/priceDiscount',
      providesTags: ['priceDiscount']
    }),
    createDiscounts: builder.mutation({
      query: (newDiscount) => ({
        url: '/priceDiscount',
        method: 'POST',
        body: newDiscount
      }),
      invalidatesTags: ['priceDiscount']
    }),
    updateDiscounts: builder.mutation({
      query: (updateDiscount) => ({
        url: `/priceDiscount/${updateDiscount.id}`,
        method: 'PUT',
        body: updateDiscount
      }),
      invalidatesTags: ['priceDiscount']
    }),
    deleteDiscounts: builder.mutation({
      query: (id) => ({
        url: `/priceDiscount/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['priceDiscount']
    })
  })
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useGetAllIdentificationsTypesQuery,
  useGetAllBooksQuery,
  useGetBookByIdQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
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
  useDeleteTaxesMutation,
  useGetAllDiscountsQuery,
  useCreateDiscountsMutation,
  useUpdateDiscountsMutation,
  useDeleteDiscountsMutation
} = bookiApi;
