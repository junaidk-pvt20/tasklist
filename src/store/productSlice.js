import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { executeReducerBuilderCallback } from "@reduxjs/toolkit/dist/mapBuilders";
// import { fetchProducts } from ".";
export const fetchProducts = createAsyncThunk(
    "products/fetch",
    async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        return data
    }
)
const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: [],

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload
            })
    }
})

export default productSlice.reducer;