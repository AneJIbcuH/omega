import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MyFormData } from "../models/models";

export const testApi = createApi({
  reducerPath: "testApi",
  baseQuery: fetchBaseQuery({ baseUrl: "www.example.com" }),
  endpoints: (build) => ({
    createCard: build.mutation<MyFormData, any>({
      query: (body) => ({
        url: '',
        method: "POST",
        body
      }),
    }),
  }),
});

export const { useCreateCardMutation } = testApi;
