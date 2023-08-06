import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import globalReducer from './globalReducer'

export const fetchProducts = createAsyncThunk(
    "products/fetch",
    async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        return data
    }
)
export const store = configureStore({
    reducer: {
        carts: cartReducer,
        global: globalReducer,
    }
});

