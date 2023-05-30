import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { API_URL } from '../../api/axios'
import { StoreState } from '../store'
import { IVeteran } from '../../@types/veteran.types'
import { IUpdateUser, IUser } from '../../@types/user.types'
import { IAddFeedBack, IFeedBack} from '../../@types/feedBack.types'

export const api = createApi({
    reducerPath: "api",
    tagTypes: ["Profile", "Veterans", "Feedback", "VeteransWPagi"],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        prepareHeaders: (headers, {getState}) => {
            const token = (getState() as StoreState).auth.accessToken

            if(token) headers.set("Authorization", `Bearer ${token}`)

            return headers
        }
    }),
    endpoints: builder => ({
        getProfile: builder.query<IUser, any>({
            query: () => "/users/profile",
            providesTags: () => [{type: "Profile"}],
            keepUnusedDataFor: 0
        }),
        getByid: builder.query<IUser, number>({
            query: (id) => `/users/${id}`
        }),
        updateUser: builder.mutation<null, IUpdateUser>({
            query: (request) => ({
                url: "/users",
                method: "PUT",
                body: request
            }),
            invalidatesTags: () => [{type: "Profile"}]
        }),
        getUsers: builder.query<IUser[], null>({
            query: () => "/users"
        }),
        getVeterans: builder.query<IVeteran[], any>({
            query: () => "/veterans",
            providesTags: () => [{type: "Veterans"}]
        }),
        getVeteransWithPagination: builder.query<IVeteran[], {page: number, limit: number}>({
            query: ({page, limit}) => `/veterans/pagination?page=${page}&limit=${limit}`,
            providesTags: () => [{type: "VeteransWPagi"}]
        }),
        addVeterans: builder.mutation<null, IVeteran>({
            query: (request) => ({
                url: "/veterans",
                method: 'POST',
                body: request
            }),
            invalidatesTags: () => [{type: "Veterans"}]
        }),
        removeVeteran: builder.mutation<null, number>({
            query: (id) => ({
                url: `/veterans/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: () => [{type: "Veterans"}, {type: "VeteransWPagi"}]
        }),
        addFeedBacks: builder.mutation<any, IAddFeedBack>({
            query: (request) => ({
                url: "/feedback",
                method: 'POST',
                body: request
            }),
            invalidatesTags: () => [{type: 'Feedback'}, {type: "VeteransWPagi"}]
        }),
        getFeedback: builder.query<IFeedBack[], null>({
            query: () => '/feedback',
            providesTags: () => [{type: "Feedback"}]
        }),
        removeFeedback: builder.mutation<null, number>({
            query: (id) => ({
                url: `/feedback/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: () => [{type: 'Feedback'}]
        })
    })
})