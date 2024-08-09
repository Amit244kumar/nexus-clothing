import { createSlice } from "@reduxjs/toolkit";

const initialState={
    status:false,
    userData:null,
    cartData:null,
    orderItems:null
}
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true
            state.userData=action.payload.userData  
            state.cartData=action.payload.cartData 
            state.orderItems=action.payload.orderItems
            
        },
        logout:(state)=>{
            state.status=false
            state.userData=null
            state.cartData=null
            state.orderItems=null
        },
        addItem:(state,action)=>{
            state.cartData.push(action.payload) 
        },
        removeItem:(state,action)=>{
            state.cartData=state.cartData.filter((item)=>item.id != action.payload)
        },
    }
})

export const {login,logout,addItem,removeItem}=authSlice.actions

export default authSlice.reducer

