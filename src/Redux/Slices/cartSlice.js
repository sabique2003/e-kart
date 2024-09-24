import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const cartlistSlice = createSlice({
  name: 'cart',
  initialState: { cart: [] },
  reducers: {
    addToCart(state, action) {
      const existing = state.cart.find(item => item.id == action.payload.id);
      if (existing) {
        existing.quantity += 1; 
        state.cart = state.cart.filter(item => item.id != action.payload.id);
        state.cart.push(existing);
        toast.success("Item Quantity Increased");
      } else {
        const product = action.payload;
        product.quantity = 1;
        state.cart.push(product);
        toast.success("Product Added To Cart!!");
      }
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter(item => item.id != action.payload);
      toast.success("Product Removed Successfully!!");
    },
    increaseQuantity(state,action){
      const existing=state.cart.find(item=>item.id==action.payload)
      existing.quantity++
    },
    decreaseQuantity(state,action){
      const existing=state.cart.find(item=>item.id==action.payload)
      if(existing.quantity==1){
        state.cart = state.cart.filter(item => item.id != action.payload);
      }
      existing.quantity--
    },
    checkOut(state,action){
      state.cart=[]
      toast.success("CheckOut Success")
    }
  }
});

export default cartlistSlice.reducer;
export const { addToCart, removeFromCart,increaseQuantity,decreaseQuantity,checkOut } = cartlistSlice.actions;
