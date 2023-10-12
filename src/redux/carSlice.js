import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
  reducerPath: 'cars',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://65005a6318c34dee0cd4c52c.mockapi.io',
  }),
  tagTypes: ['Car'],
  endpoints: builder => ({
    getCars: builder.query({
      query: () => `/adverts`,
      providesTags: ['Car'],
    }),
  }),
});

export const { useGetCarsQuery } = carsApi;
