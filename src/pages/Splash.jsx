import React from 'react'
import Button from '@mui/material/Button';
import { Link, Route, Routes } from 'react-router-dom';

export default function Splash() {
    return (
        <div className='login'>
            <h1 className="login__title">
                Welcome to <br />
                <span>

                    <strong>
                        Forskor
                    </strong>
                </span>
            </h1>


            <Routes>
                <Route path='/' element={
                    <>
                        <Link to="/splash/login" className="btn btn--login">
                            Signin or Signup
                        </Link>
                        <Link to="/" className="btn btn--login btn--login__outline">
                            Login as a Guest
                        </Link>
                    </>
                } />

                <Route path='login' element={
                    <>
                        <input type="text" className='login__input' placeholder='username' />
                        <input type="password" className='login__input' placeholder='passward' />

                        <Link to="/menu" className="btn btn--login">
                            Login
                        </Link>

                        <div className="login__signup-msg">
                            <h6>Already have an account ?  &nbsp;
                                <Link to="/splash/signup" >
                                    SignUp
                                </Link></h6>
                        </div>
                    </>
                } />
                <Route path='signup' element={
                    <>
                        <input type="text" className='login__input' placeholder='Username' />
                        <input type="email" className='login__input' placeholder='Email' />
                        <input type="text" className='login__input' placeholder='Phone Number' />
                        <input type="text" className='login__input' placeholder='Place' />
                        <input type="text" className='login__input' placeholder='Address' />
                        <input type="text" className='login__input' placeholder='Street' />
                        <input type="text" className='login__input' placeholder='Pin' />

                        <Link to="/menu" className="btn btn--login">
                            Signup
                        </Link>

                        <div className="login__signup-msg">
                            <h6>Already have an account ?  &nbsp;
                                <Link to="/splash/login" >
                                    SignIn
                                </Link></h6>
                        </div>
                    </>
                } />
                <Route path='otp' element={
                    <>
                        <input type="text" className='login__input' placeholder='Enter OTP' />
                        <div className="login__resend">
                            <h6>Resend OTP</h6>
                        </div>

                        <Link to="/menu" className="btn btn--login">
                            Login
                        </Link>

                    </>
                } />






            </Routes>




        </div >
    )
}
