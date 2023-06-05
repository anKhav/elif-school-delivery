
import {createSlice} from "@reduxjs/toolkit";
import {CartProductInterface} from "../../models/cartProduct";

interface CartState {
    cart:CartProductInterface[],
}
const initialState:CartState = {
    cart:[],
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
                const tempProduct = {...action.payload,amount: 1}
                state.cart.push(tempProduct)
            }
        },
        decrementProductAmount:(state,{payload}) => {
            const itemIndex = state.cart.findIndex((item) => {
                return item.name === payload.name
            })
            if(itemIndex >= 0){
                state.cart[itemIndex].amount -= 1
            }
        },
        incrementProductAmount:(state,{payload}) => {
            const itemIndex = state.cart.findIndex((item) => {
                return item.name === payload.name
            })
            if(itemIndex >= 0){
                state.cart[itemIndex].amount += 1
            }
        },
        setProductAmount:(state,{payload}) => {
            const itemIndex = state.cart.findIndex((item) => {
                return item.name === payload.name
            })
            if(itemIndex >= 0){
                state.cart[itemIndex].amount = payload.amount
            }
        },
        removeProduct:(state, action) => {
            state.cart = state.cart.filter(product => product.name  !== action.payload)
        },
        clearCart: state => {
            state.cart = []
        }
    },
})

export const {setCartProduct, clearCart,decrementProductAmount,incrementProductAmount,setProductAmount} = cartSlice.actions
export default cartSlice.reducer