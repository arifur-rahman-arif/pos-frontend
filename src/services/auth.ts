import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/auth/` }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => {
                return {
                    url: `login`,
                    method: 'POST',
                    body
                };
            }
        }),
        forgotPassword: builder.mutation({
            query: (body) => {
                return {
                    url: `forgot-password`,
                    method: 'POST',
                    body
                };
            }
        }),
        googleLogin: builder.mutation({
            query: (body) => {
                return {
                    url: `google-login`,
                    method: 'POST',
                    body
                };
            }
        }),
        facebookLogin: builder.mutation({
            query: (body) => {
                return {
                    url: `facebook-login`,
                    method: 'POST',
                    body
                };
            }
        }),
        verifySession: builder.mutation({
            query: () => {
                return {
                    url: `verify-session`,
                    method: 'POST'
                };
            }
        })
    })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useLoginMutation,
    useForgotPasswordMutation,
    useGoogleLoginMutation,
    useFacebookLoginMutation,
    useVerifySessionMutation
} = authApi;
