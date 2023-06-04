
import {createSlice} from "@reduxjs/toolkit";
import {CartProductInterface} from "../../models/cartProduct";

interface CartState {
    cart:CartProductInterface[],
    currentShop:number,
    totalPrice:number
}
const initialState:CartState = {
    cart:[],
    currentShop:0,
    totalPrice:0
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        setCartProduct:(state, action) => {
            const itemIndex = state.cart.findIndex((item) => {
                return item.name === action.payload.name
            })
            if(itemIndex >= 0){
                state.cart[itemIndex].amount += 1
            } else {
                console.log(action.payload);
                const tempProduct = {...action.payload,quantity: 1}
                state.cart.push(tempProduct)
            }
        },
        setCardProductQuantity:(state, {payload}) => {
            state.cart = state.cart.map(product => product.name === payload.name ? {
                ...product,
                quantity: payload.quantity
            } : product)
        },
        removeProduct:(state, action) => {
            state.cart = state.cart.filter(product => product.name  !== action.payload)
        },
        clearCart: state => {
            state.cart = []
        }
    },
})

export const {setCartProduct} = cartSlice.actions
export default cartSlice.reducer