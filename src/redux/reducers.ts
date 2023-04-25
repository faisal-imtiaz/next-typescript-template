import { combineReducers } from '@reduxjs/toolkit'
import productReducer from './products/productSlice'

const rootReducer = combineReducers({
    product: productReducer,
})

export default rootReducer;