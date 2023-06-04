import {combineReducers, configureStore} from "@reduxjs/toolkit";
import cartReducer from './reducers/cartSlice.ts'
import {shopAPI} from "../services/ShopService.ts";

const rootReducer = combineReducers({
    cartReducer,
    [shopAPI.reducerPath]: shopAPI.reducer
})
export const setupStore = () => {
    return configureStore({
        reducer:rootReducer,
        middleware:getDefaultMiddleware => getDefaultMiddleware().concat(shopAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']