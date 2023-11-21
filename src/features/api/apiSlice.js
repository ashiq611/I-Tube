import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "QueryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://i-tube.onrender.com/",
  }),
  endpoints: (builder) => ({
    getVideos: builder.query({
        query: () => 'videos/'
    })
  }),
});

export const {useGetVideosQuery} = apiSlice;


