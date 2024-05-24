import {
    fetchBaseQuery
  } from '@reduxjs/toolkit/query';
   
  export const baseQueryWithoutToken = fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}`
  });
   
  export const baseQueryWithAuth = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers) => {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
  });