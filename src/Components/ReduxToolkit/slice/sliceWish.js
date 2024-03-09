import { createSlice } from "@reduxjs/toolkit";




const sliceWish =  createSlice({
    name:'wish',
    initialState:{wishItem:[],count:0},
    reducers:{  
        addWish:(state,action) => 
        {
            const axios = state.wishItem.findIndex((item) => item._id === action.payload._id)
            if(axios >= 0)
            {

            }else
            {
                state.wishItem = [...state.wishItem , action.payload]
            }
        },
        removeItem:(state,action) => 
        {
            state.wishItem = state.wishItem.filter((item) => item._id !== action.payload._id)
        },
        countItem:(state) => {
            state.count = state.wishItem.length
        }
        
    }
     
})
export const {addWish,removeItem,countItem}  = sliceWish.actions
export default sliceWish.reducer