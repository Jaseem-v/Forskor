export const bottomPanelOpen = () => {
    return {
        type: "OPEN_BOTTOM_PANEL",
    }
}
export const bottomPanelClose = () => {
    return {
        type: "CLOSE_BOTTOM_PANEL",
    }
}

export const addproductToCart = (items, quantity) => {
    return {
        type: "ADD_PRODUCT_TO_CART",
        payload: items,
        quantity: quantity
    }
}
export const removeproductfromCart = (items) => {
    return {
        type: "REMOVE_PRODUCT_FROM_CART",
        payload: items
    }
}
export const incrementCartProduct = (items) => {
    return {
        type: "INCREMENT_QUANTITY_OF_CART_PRODUCT",
        payload: items
    }
}
export const decrementCartProduct = (items) => {
    return {
        type: "DECREMENT_QUANTITY_OF_CART_PRODUCT",
        payload: items
    }
}


export const addproductToWishList = (items) => {
    return {
        type: "ADD_PRODUCT_TO_WISHLIST",
        payload: items
    }
}
export const removeproductfromWishList = (items) => {
    return {
        type: "REMOVE_PRODUCT_FROM_WISHLIST",
        payload: items
    }
}

// alert

export const addWishListAlert = () => {
    return {
        type: "WISHLIST__ADD__ALERT"
    }
}
export const addWishListAlertClose = () => {
    return {
        type: "WISHLIST__ADD__ALERT__CLOSE"
    }
}
export const removeWishListAlert = () => {
    return {
        type: "WISHLIST__REMOVE__ALERT"
    }
}
export const removeWishListAlertClose = () => {
    return {
        type: "WISHLIST__REMOVE__ALERT__CLOSE"
    }
}
export const addProductCartAlert = () => {
    return {
        type: "CART__ADD__ALERT"
    }
}
export const addProductCartAlertClose = () => {
    return {
        type: "CART__ADD__ALERT__CLOSE"
    }
}
export const removeProductCartAlert = () => {
    return {
        type: "CART__REMOVE__ALERT"
    }
}
export const removeProductCartAlertClose = () => {
    return {
        type: "CART__REMOVE__ALERT__CLOSE"
    }
}