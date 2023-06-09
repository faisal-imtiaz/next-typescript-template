import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Product {
    id: number
    name: string
    price: number
}

interface ProductsState {
    products: Product[],
    productCount: number
}

const initialState: ProductsState = {
    products: [{
        id: 1,
        name: "shoes",
        price: 200
    }],
    productCount: 2
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload)
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        },
    }
})

export const { addProduct, removeProduct } = productSlice.actions
export default productSlice.reducer