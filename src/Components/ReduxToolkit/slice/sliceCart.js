import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const sliceCart = createSlice({
    name: 'cart',
    initialState: { count: 0, totalPrice: 0, cartItem: [] },
    reducers: {
        addCart: (state, action) => {
            const existingIndex = state.cartItem.findIndex((item) => item._id === action.payload._id)
            if (existingIndex >= 0) {
                toast.info(`Increased${action.payload.title.substring(0,20)} Cart`, {
                    position: "bottom-left",
                })
            } else {
              state.cartItem = [...state.cartItem, { ...action.payload, amount: 1 }]
                toast.success(` ${action.payload.title.substring(0,20)} added to cart `, {
                    position: "bottom-left",
                })
            }
        },
        getCartTotal: (state) => {
            const { count, totalPrice } = state.cartItem.reduce((cart, items) => {
                const { price, amount } = items
                cart.totalPrice += price * amount
                cart.count += amount
                return cart;
            }
                , { count: 0, totalPrice: 0 })
            state.count = count
            state.totalPrice = totalPrice
        },
        increase: (state, action) => {
            state.cartItem = state.cartItem.map((item) => item._id === action.payload._id ? { ...item, amount: item.amount + 1 } : item)
            toast.success(` ${action.payload.title.substring(0, 12)} increase cart`, {
                position: "bottom-left",
            });
        },
        // map((item) => item._id === action.payload._id ?  { ...item, amount: item.amount - 1 } : item)
        decrease: (state, action) => {
            state.cartItem = state.cartItem.map((item) => {
                if (item._id === action.payload._id) {
                    if (item.amount === 0)
                    {
                        
                    }else
                    {
                        toast.info(`Decrease ${action.payload.title.substring(0, 12)} quantity`, {
                        position: "bottom-left",
                    });
                        }
                    return { ...item, amount: item.amount - 1 }

                } else {
                    return item
                }
            })
                .filter((item) => {
                    if (item.amount === 0) {
                        toast.error(` ${action.payload.title.substring(0, 12)} removed Fromcart`, {
                            position: "bottom-left",
                        });
                        return item._id !== action.payload._id
                    } else {
                        return item
                    }
                })

        },
        removeFromCart: (state, action) => {
            state.cartItem = state.cartItem.filter((item) => item._id !== action.payload._id)
            toast.success(`${action.payload.title.substring(0, 12)} remove to cart`, {
                position: "bottom-left",
            });

        }
    }
})

export const { addCart, getCartTotal, increase, decrease, removeFromCart } = sliceCart.actions
export default sliceCart.reducer