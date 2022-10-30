import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "./banners.scss"

export default function Banners() {
    return (
        <div>

            <Swiper
                className="mySwiper"
                spaceBetween={50}
                slidesPerView={1}
            >
                <SwiperSlide>
                    <div className="banner__slide">
                        <img src="banner_1.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner__slide">
                        <img src="banner_2.png" alt="" />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}
