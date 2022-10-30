import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "../category/category.scss"
import { useDispatch } from 'react-redux';
import { bottomPanelOpen } from '../../redux/action/reduxAction';
import { Link } from 'react-router-dom';

export default function ProductSlider() {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(bottomPanelOpen())
    }

    return (
        <div className='category' style={{ marginBottom: "5rem" }}>
            <div className="category__title-box">
                <h1 className="category__title">
                    Populer Foods
                </h1>
                <Link to={"/menu"} className="btn btn--more">
                    More
                </Link>
                
            </div>

            <div className="category__products-container">

                <Swiper
                    className="mySwiper"
                    slidesPerView={2}
                    spaceBetween={30}
                >

                    {
                        [1, 2, 3, 4, 5].map(el => (
                            <SwiperSlide>
                                <div className="card" onClick={handleClick}>
                                    <div className="category__item category__food">
                                        <img src="food.png" alt="" />

                                        <div className="product__details">
                                            <div>
                                                <div className="product__price-element">

                                                    <h3 className="product__price">
                                                        $12.40
                                                    </h3>
                                                    <h6 className="product__discount">
                                                        <strike>
                                                            $15.00
                                                        </strike>
                                                    </h6>
                                                </div>
                                                <p className='prodcut__description'>
                                                    Burger ipsum
                                                    dolor
                                                </p>
                                            </div>
                                            <div className="product__add-cart">
                                                +
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </SwiperSlide>
                        ))
                    }



                </Swiper>
            </div>
        </div>
    )
}
