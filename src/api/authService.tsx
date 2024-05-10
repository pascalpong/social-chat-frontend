/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithAuth } from './baseQuery';

export const AuthService = createApi({
    reducerPath: 'AuthService',
    baseQuery: baseQueryWithAuth,
    endpoints: (builder) => ({
      authRegister: builder.mutation<any, any>({
        query: (body) => ({
          url: '/auth/google',
          method: 'POST',
          body
        })
      }),
    })
});
  
export const { useAuthRegisterMutation } = AuthService;