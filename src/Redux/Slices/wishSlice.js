import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";



const wishListSlice=createSlice({
    name:"wishlist",
    initialState:{
        items:[]
    },
    reducers:{
        addToWishList(state,action){
            const existing=state.items.find(item=>item.id==action.payload.id)
            if(existing){
                toast.error("Item Already Added to Wishlist")
            }else{
                state.items.push(action.payload)
                toast.success("Added to wishlist")
            }
        },
        removeFromWishList(state,action){
            state.items=state.items.filter(item=>item.id!=action.payload)
        }
    }
   
})

export default wishListSlice.reducer
export const {addToWishList,removeFromWishList}=wishListSlice.actions