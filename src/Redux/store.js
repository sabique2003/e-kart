import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slices/productSlice";
import wishSlice from "./Slices/wishSlice";
import cartSlice from "./Slices/cartSlice";

const productStore=configureStore({
    reducer:{
        productReducer:productSlice,
        wishReducer:wishSlice,
        cartReducer:cartSlice
    }
})

export default productStore