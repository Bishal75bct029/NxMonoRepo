import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Book } from './types';
import { API_ROUTES } from '@monorepo/shared';


export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getBooks: builder.query<Book[], void>({
      query: () => `${API_ROUTES.book}`,
    }),
  }),
});

export const { useGetBooksQuery } = bookApi;
export default bookApi;
