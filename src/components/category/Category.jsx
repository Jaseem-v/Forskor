import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "./category.scss"

export default function Category() {
    return (
        <div className='category'>
            <div className="category__title-box">
                <h1 className="category__title">
                    Top Menus
                </h1>
                <a href="#" className="btn btn--more">More</a>
            </div>

            <div className="category__products-container">

                <Swiper
                    className="mySwiper"
                    slidesPerView={3}
                    spaceBetween={20}
                >
                    <SwiperSlide>
                        <div className="category__item">
                            <img src="food.png" alt="" />
                            <h3>Item</h3>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="category__item">
                            <img src="burger.png" alt="" />
                            <h3>Item</h3>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="category__item">
                            <img src="noodles.png" alt="" />
                            <h3>Item</h3>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="category__item">
                            <img src="food.png" alt="" />
                            <h3>Item</h3>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="category__item">
                            <img src="burger.png" alt="" />
                            <h3>Item</h3>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="category__item">
                            <img src="burger.png" alt="" />
                            <h3>Item</h3>
                        </div>


                    </SwiperSlide>


                </Swiper>
            </div>
        </div>
    )
}
