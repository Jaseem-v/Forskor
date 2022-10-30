import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProductCartAlertClose, addWishListAlertClose, removeProductCartAlertClose, removeWishListAlertClose } from '../../redux/action/reduxAction';
import AlrtMsg from './AlrtMsg'

export default function AlrtContainer() {

    const wishListReducer = useSelector((state) => state.wishListReducer)
    const cartReducer = useSelector((state) => state.cartReducer)
    const dispatch = useDispatch();


    return (
        <div>
            <AlrtMsg handleClose={() => dispatch(addWishListAlertClose())} open={wishListReducer.addAlert} color={"success"} msg={"Product added to Wish List successfully"} />
            <AlrtMsg handleClose={() => dispatch(removeWishListAlertClose())} open={wishListReducer.removeAlert} color={"error"} msg={"Product removed from WishList"} />
            <AlrtMsg handleClose={() => dispatch(addProductCartAlertClose())} open={cartReducer.addCartAlert} color={"success"} msg={"Product added to cart successfully"} />
            <AlrtMsg handleClose={() => dispatch(removeProductCartAlertClose())} open={cartReducer.removeCartAlert} color={"error"} msg={"Product removed from Cart"} />
        </div>
    )
}
