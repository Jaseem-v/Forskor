const initialState = {
    wishlist: [],
    addAlert: false,
    removeAlert: false,
}

export const wishListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT_TO_WISHLIST":
            return { ...state, wishlist: [...state.wishlist, action.payload] }

        case "REMOVE_PRODUCT_FROM_WISHLIST":
            return {
                ...state, wishlist: state.wishlist.filter(el => el.id !== action.payload)
            }
        case "WISHLIST__ADD__ALERT":
            return { ...state, addAlert: true }
        case "WISHLIST__ADD__ALERT__CLOSE":
            return { ...state, addAlert: false }
        case "WISHLIST__REMOVE__ALERT":
            return { ...state, removeAlert: true }
        case "WISHLIST__REMOVE__ALERT__CLOSE":
            return { ...state, removeAlert: false }
        default:
            return state
    }
}