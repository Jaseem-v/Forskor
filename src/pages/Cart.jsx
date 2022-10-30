import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Button } from "@mui/material"
import { decrementCartProduct, incrementCartProduct, removeProductCartAlert, removeproductfromCart } from '../redux/action/reduxAction';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useLocation } from 'react-router';
export default function Cart() {

    const { cart } = useSelector((state) => state.cartReducer)
    const dispatch = useDispatch();

    const handleIncrement = (item) => {
        dispatch(incrementCartProduct(item))
    };

    //Create handleDecrement event handler
    const handleDecrement = (item, quantity) => {
        if (quantity <= 1) return;
        dispatch(decrementCartProduct(item))
    };

    const handleRemove = (id) => {
        console.log("remove");
        dispatch(removeproductfromCart(id))
        dispatch(removeProductCartAlert())
    };

    

    return (
        <div>
            <div className="cart">
                {cart.length ?
                    <div>
                        <div className='cart__container'>
                            {cart.map((el, i) => (

                                <div className="cart__item" key={i}>
                                    <img src={el.product.image} alt="" className='cart__img' />
                                    <div className="cart__details">
                                        <h3 className="cart__title">{el.product.title}</h3>
                                        <h4 className="cart__quantity">{el.quantity} x {el.product.price}</h4>
                                        <ul className="bottom-details__add-cart cart__counter">
                                            <li onClick={() => handleDecrement(el.product, el.quantity)}>-</li>
                                            <li>{el.quantity}</li>
                                            <li onClick={() => handleIncrement(el.product)}>+</li>
                                            <IconButton aria-label="delete" onClick={() => handleRemove(el.product.id)}>
                                                <DeleteIcon color="error" />
                                            </IconButton>
                                        </ul>
                                    </div>
                                    <h4 className="cart__price">
                                        ${(el.quantity * el.product.price).toFixed(2)}
                                    </h4>

                                </div>

                            ))}
                        </div>
                        <div className="cart__charge-details">


                            <Grid container justifyContent={"space-between"}>
                                <Grid item xs={6}>
                                    Ithems Price
                                </Grid>
                                <Grid item xs={4}>
                                    :  &nbsp; 112.40/-
                                </Grid>
                            </Grid>
                            <Grid container justifyContent={"space-between"}>
                                <Grid item xs={6}>
                                    Delivery Charge
                                </Grid>
                                <Grid item xs={4}>
                                    :  &nbsp; 20/-
                                </Grid>
                            </Grid>
                            <Grid container justifyContent={"space-between"}>
                                <Grid item xs={6}>
                                    Discount
                                </Grid>
                                <Grid item xs={4}>
                                    :  &nbsp; 20/-
                                </Grid>
                            </Grid>
                        </div>

                        <hr />
                        <Grid container justifyContent={"space-between"} style={{ marginTop: "1rem" }}>
                            <Grid item xs={6}>
                                <strong> Grand Total     </strong>
                            </Grid>
                            <Grid item xs={4}>
                                <strong> : &nbsp; 112.4/-</strong>
                            </Grid>
                        </Grid>

                        <Button variant='contained' fullWidth style={{ marginTop: "3rem" }}>
                            Continue
                        </Button>
                    </div>
                    :
                    <div className="cart__empty">
                        <h1 className="cart__empty-text">Empty Cart 🥲</h1>
                    </div>

                }
            </div>
        </div>
    )
}
