import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react';

const url = 'http://localhost:5000/api/';
export const authorApi = createApi({
  reducerPath: 'authorApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url
  }),
  endpoints: (builder) => ({
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
    })
  })
});

export const {
  useGetAllAuthorsQuery,
  useCreateAuthorMutation,
  useUpdateAuthorMutation,
  useDeleteAuthorMutation
} = authorApi;
