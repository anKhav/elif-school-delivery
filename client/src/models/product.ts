export interface Product {
    id:number,
    name:string,
    image:string,
    price:number,
    shopId:number
}
export interface Data {
    shopId:number,
    products:Product[]
}