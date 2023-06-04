import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Shop} from "../models/shop.ts";
import {Data} from "../models/product.ts";

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
        })
    })
})

// export const {useFetchShopsQuery} = shopAPI