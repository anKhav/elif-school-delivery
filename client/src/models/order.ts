import {CartProductInterface} from './cartProduct.ts'

export interface Order {
    products:CartProductInterface[],
    shopAddress:string,
    totalPrice:number,
    userName:string,
    userEmail:string,
    userPhone:string,
    userAddress:string
}