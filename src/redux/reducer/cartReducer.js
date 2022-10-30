const initialState = {
    cart: [],
    addCartAlert: false,
    removeCartAlert:false
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT_TO_CART":

            if (state.cart.some(el => el.product == action.payload)) {

                return {
                    ...state, cart: state.cart.map(el => {
                        if (el.product == action.payload) {
                            return { product: el.product, quantity: el.quantity + 1 }
                        } else {
                            return el
                        }
                    })
                }
            } else {

                return { ...state, cart: [...state.cart, { product: action.payload, quantity: action.quantity }] }
            }

        case "INCREMENT_QUANTITY_OF_CART_PRODUCT":
            return {
                ...state, cart: state.cart.map(el => {
                    if (el.product == action.payload) {
                        return { product: el.product, quantity: el.quantity + 1 }
                    } else {
                        return el
                    }
                })
            }
        case "DECREMENT_QUANTITY_OF_CART_PRODUCT":
            return {
                ...state, cart: state.cart.map(el => {
                    if (el.product == action.payload) {
                        return { product: el.product, quantity: el.quantity - 1 }
                    } else {
                        return el
                    }
                })
            }
        case "REMOVE_PRODUCT_FROM_CART":
            return {
                ...state, cart: state.cart.filter(el => el.product.id !== action.payload)
            }

        case "CART__ADD__ALERT":
            return {
                ...state, addCartAlert: true
            }
        case "CART__ADD__ALERT__CLOSE":
            return {
                ...state, addCartAlert: false
            }
        case "CART__REMOVE__ALERT":
            return {
                ...state, removeCartAlert: true
            }
        case "CART__REMOVE__ALERT__CLOSE":
            return {
                ...state, removeCartAlert: false
            }
        default:
            return state
    }
}