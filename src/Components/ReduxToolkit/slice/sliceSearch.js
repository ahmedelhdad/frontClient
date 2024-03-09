import { createSlice } from "@reduxjs/toolkit";




const sliceSearch = createSlice({
    name:'search',
    initialState:{value:''},
    reducers:{
        writeSearch:(state,action) => 
        {
            state.value = action.payload
        }
    }
})


export const {writeSearch} = sliceSearch.actions
export default sliceSearch.reducer