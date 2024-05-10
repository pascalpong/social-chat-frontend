import {
    fetchBaseQuery
  } from '@reduxjs/toolkit/query';
   
  export const baseQueryWithoutToken = fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}`
  });
   
  export const baseQueryWithAuth = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers) => {
      const authUser = localStorage.getItem("AuthUser"); 
      if (authUser) {
        const { accessToken } = JSON.parse(authUser);
        headers.set("Authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
  });