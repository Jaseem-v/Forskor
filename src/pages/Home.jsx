import React from 'react'
import Banners from '../components/banners/Banners'
import Category from '../components/category/Category'
import ProductSlider from '../components/products/productSlider'

export default function Home() {
    return (
        <div>
            <Banners />
            <Category />
            <ProductSlider />
        </div>
    )
}
