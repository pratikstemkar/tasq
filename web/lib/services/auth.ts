import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export interface User {
    id: string;
    username: string;
    email: string;
    avatar: string;
    roles: Array<string>;
}

export const authApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "",
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token;
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: builder => ({}),
});

export const {} = authApi;
