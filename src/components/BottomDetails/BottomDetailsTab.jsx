import React, { useState } from 'react'
import "./bottomdetails.scss"
import { Button } from "@mui/material"
import { useDispatch, useSelector } from 'react-redux';
import { addProductCartAlert, addproductToCart, bottomPanelClose } from '../../redux/action/reduxAction';

const data = {
    id: Date.now(),
    image: "/food.png",
    title: "Burger ipsum",
    description: " dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    price: "12.40",
    discount: "15.00"
}

export default function BottomDetailsTab() {

    const dispatch = useDispatch();
    const [counter, setCounter] = useState(1);
    const { cart } = useSelector((state) => state.cartReducer)



    const handleClick = () => {
        dispatch(bottomPanelClose())
    }

    const handleBottomContainer = (e) => {
        e.stopPropagation()
    }

    const handleIncrement = () => {
        setCounter(prevCount => prevCount + 1);
    };

    //Create handleDecrement event handler
    const handleDecrement = () => {
        if (counter <= 1) return;
        setCounter(prevCount => prevCount - 1);
    };

    const handleAddtoCart = () => {
        dispatch(bottomPanelClose())
    }

    const addcarthandler = (items) => {
        dispatch(addproductToCart(items, counter))
        dispatch(addProductCartAlert())
        dispatch(bottomPanelClose())
        setCounter(1)
    }
    return (
        <div className='bottom-details' onClick={handleClick}>
            <div className="bottom-details__container" onClick={handleBottomContainer}>
                <div className="bottom-details__topbar">
                    <div></div>
                </div>
                <div className="bottom-details__img">
                    <img src="/food.png" alt="" />
                </div>
                <h4 className="bottom-details__title">
                    Burger ipsum
                </h4>
                <p className="bottom-details__paragraph">
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                </p>
                <h3 className="bottom-details__price">
                    $12.40 <span><strike>$15.00</strike></span>
                </h3>
                {cart.some(el => el.product == data) ?
                    <h1 className='cart__already'>*product added to cart*</h1> :
                    <>
                        <ul className="bottom-details__add-cart">
                            <li onClick={handleDecrement}>-</li>
                            <li>{counter}</li>
                            <li onClick={handleIncrement}>+</li>
                        </ul>

                        <Button variant='contained' fullWidth onClick={() => addcarthandler(data)}>
                            Add To Cart
                        </Button>
                    </>
                }
            </div>
        </div>
    )
}
