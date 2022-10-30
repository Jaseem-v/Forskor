


const bottomuppanel = false;


export const productReducer = (state = bottomuppanel, action) => {
    switch (action.type) {
        case "OPEN_BOTTOM_PANEL":
            return true
        case "CLOSE_BOTTOM_PANEL":
            return false
        default:
            return state
    }
}


