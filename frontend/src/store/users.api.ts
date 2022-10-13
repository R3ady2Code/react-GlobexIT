import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../user.types';

export const userApi = createApi({
  reducerPath: 'api/users',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3000/' }),
  endpoints: (build) => ({
    getUsers: build.query<IUser[], string>({ query: (searchValue) => `?term=${searchValue}` }),
  }),
});

export const { useGetUsersQuery } = userApi;
