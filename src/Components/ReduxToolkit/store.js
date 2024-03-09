import { configureStore } from "@reduxjs/toolkit"
import SliceUser from './slice/sliceUser'
import sliceCart from "./slice/sliceCart"
import sliceWish from "./slice/sliceWish"
import sliceSearch from "./slice/sliceSearch"

const store = configureStore(
    {
        reducer: {
            user: SliceUser,
            cart:sliceCart,
            wish:sliceWish,
            search:sliceSearch
        }
    }
)

export default store