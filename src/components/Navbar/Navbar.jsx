import React from 'react'
import "./navbar.scss"
import { FiMenu } from "react-icons/fi"
import { HiUserCircle } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import { useDispatch, useSelector } from 'react-redux';



export default function Navbar() {

    const {cart} = useSelector((state) => state.cartReducer)

    console.log(cart);

    return (
        <div className='navbar'>
            <div className="navbar__top">
                <FiMenu />
                <h1 className="navbar__logo">
                    Forskor
                </h1>

                <HiUserCircle />
            </div>
            <div className="navbar__search-box">
                <div className="navbar__search-icon">
                    <BiSearch />
                </div>
                <input type="text" className="navbar__search-input" placeholder='Search For...' />
            </div>
        </div>
    )
}
