

import { createSlice } from "@reduxjs/toolkit";
export const fetchUser = () => 
{
    const userInfo = localStorage.getItem('user') !== "undefined" ?
    JSON.parse(localStorage.getItem('user')) : localStorage.clear()
    return userInfo;
}


const sliceUser = createSlice({
    name: 'user',
    initialState: { user:fetchUser() ? fetchUser() : ''},
    reducers: {
        LOGIN:(state,action) => 
        {
            window.localStorage.setItem('user',JSON.stringify(action.payload))
            state.user = JSON.parse(window.localStorage.getItem('user'))
            // state.user = action.payload
            // console.log(window.localStorage.getItem('user'))
        }
    }
})


    

export const {LOGIN } = sliceUser.actions
export default sliceUser.reducer