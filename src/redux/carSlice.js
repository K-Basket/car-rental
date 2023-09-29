import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
  reducerPath: 'cars',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://65005a6318c34dee0cd4c52c.mockapi.io',
  }),
  tagTypes: ['Car'],
  endpoints: builder => ({
    // get
    getCars: builder.query({
      query: () => `/advert`,
      providesTags: ['Car'],
    }),
    // getById
    getCarById: builder.query({
      query: id => `/advert/${id}`,
      providesTags: ['Car'],
    }),
  }),
});

export const { useGetCarsQuery, useGetCarByIdQuery } = carsApi;
