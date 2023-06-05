import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Shop} from "../models/shop.ts";
import {Data} from "../models/product.ts";
import {Order} from "../models/order.ts";

export const shopAPI = createApi({
    reducerPath:'shopAPI',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://elif-school-delivery-production.up.railway.app/api',
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
        searchByEmail: builder.mutation<Order[]>({
            query:(email) => ({
                url:`/order/email`,
                method:"POST",
                body:{
                    email
                }
            })
        }),
        createOrder: builder.mutation<Order>({
            query:(order) =>({
                url:'/order',
                method:'POST',
                body:order
            })
        })
    })
})

// export const {useFetchShopsQuery} = shopAPI