import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Shop} from "../models/shop.ts";
import {Data} from "../models/product.ts";
import {SERVER_URL} from "../consts.ts";

export const shopAPI = createApi({
    reducerPath:'shopAPI',
    baseQuery: fetchBaseQuery({
        baseUrl:`${SERVER_URL}api`,
    }),
    endpoints:(builder) => ({
        fetchAllShops: builder.query<Shop[], number>({
            query:() => ({
                url:'/shop'
            })
        }),
        fetchShopProducts: builder.query<Data, number>({
            query:(id) => ({
                url:`/product/all/${id}`
            })
        }),
        searchByEmail: builder.mutation({
            query:(email) => ({
                url:`/order/email`,
                method:"POST",
                body:{
                    email
                }
            })
        }),
        searchByPhone: builder.mutation({
            query:(phone) => ({
                url:`/order/phone`,
                method:"POST",
                body:{
                    phone
                }
            })
        }),
        createOrder: builder.mutation({
            query:(order) =>({
                url:'/order',
                method:'POST',
                body:order
            })
        })
    })
})

// export const {useFetchShopsQuery} = shopAPI