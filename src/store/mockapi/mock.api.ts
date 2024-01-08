import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const mockApi = createApi({
  reducerPath: 'mock/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6597bee6668d248edf2350b5.mockapi.io/',
  }),
  endpoints: (build) => ({
    getMock: build.query({
      query: (name) => name,
    }),
  }),
});

export const {useGetMockQuery} = mockApi;
