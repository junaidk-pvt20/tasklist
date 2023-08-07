import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],

    },
    reducers: {
        add(state, action) {
            state?.cart?.push(action.payload)
            alert("Item Added")
        },
        remove(state, action) {
            let index = null;
            for (let i = 0; i < state?.cart?.length; i++) {
                if (state?.cart[i].id === action.payload) {
                    index = i;
                    break;
                }
            }
            if (index !== null) {
                state?.cart.splice(index, 1)
                alert("Item Removed")
            } else {
                alert("No Items in Cart to Remove")
            }

        },
    },
})


export const { add, remove } = cartSlice.actions

export default cartSlice.reducer;