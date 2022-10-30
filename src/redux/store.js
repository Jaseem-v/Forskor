import { configureStore } from '@reduxjs/toolkit'
import { productReducer } from "./reducer/productsReducer"
import { cartReducer } from "./reducer/cartReducer"
import { wishListReducer } from "./reducer/wishlistReducer"


export default configureStore({
    reducer: {
        productReducer,
        cartReducer,
        wishListReducer
    },
})