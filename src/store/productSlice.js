import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { executeReducerBuilderCallback } from "@reduxjs/toolkit/dist/mapBuilders";
// import { fetchProducts } from ".";
export const fetchProducts = createAsyncThunk(
    "products/fetch",
    async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data1 = await res.json();
        return data1
    }
)
const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                console.log('state', state)
                state.products = action.payload
            })
    }
})

export default productSlice.reducer;