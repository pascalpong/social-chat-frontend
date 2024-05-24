/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithAuth } from './baseQuery';

export const AuthService = createApi({
    reducerPath: 'AuthService',
    baseQuery: baseQueryWithAuth,
    endpoints: (builder) => ({
      authRegister: builder.mutation({
        query: (body) => ({
          url: '/auth/google',
          method: 'POST',
          body
        })
      }),
      verifyLogin: builder.mutation({
        query: (body) => ({
          url: '/auth/verify-login',
          method: 'POST',
          body
        })
      }),
      changeDisplayDetails: builder.mutation({
        query: (body) => ({
          url:'/auth/change-display',
          method: 'POST',
          body
        })
      })
    })
});
  
export const { useAuthRegisterMutation, useChangeDisplayDetailsMutation, useVerifyLoginMutation } = AuthService;