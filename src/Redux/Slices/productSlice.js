import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductThunk=createAsyncThunk('products/fetchProductThunk',async()=>{
    const pro=await axios.get("https://dummyjson.com/products")
    localStorage.setItem("products",JSON.stringify(pro.data))
    return pro.data.products
})

const ProductSlice = createSlice({  
    name:"products",
    initialState:{
        products:[],
        loading:false, 
        error:"",
        productsPerPage:10,
        currentPage:1
    },
    reducers:{
        nextPage(state,action){
            state.currentPage++
        },
        prevPage(state,action){
            state.currentPage--
        },
        searchWithKey(state,action){
            state.products=state.products.filter(item=>item.title.toLowerCase().includes(action.payload.toLowerCase()))
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProductThunk.pending,(state,action)=>{
            state.loading=true
        }),
        builder.addCase(fetchProductThunk.fulfilled,(state,action)=>{
            state.loading=false
            state.products=action.payload
        })
        builder.addCase(fetchProductThunk.rejected,(state,action)=>{
            state.loading=false
            state.error="api request failed!!"
        })
    }

})
export default ProductSlice.reducer
export const {nextPage,prevPage,searchWithKey} =ProductSlice.actions