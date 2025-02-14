import React from 'react';
import Hero from '../components/products/hero/Hero';
import ProductsShowcase from '../components/products/productsShowcase/ProductsShowcase';
import ContactUs from '../components/home/contactUs/ContactUs';

const Products = () => {
    return (
        <div>
            <Hero />
            <ProductsShowcase />
            <ContactUs />
        </div>
    );
};

export default Products;