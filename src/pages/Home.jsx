import React from "react";
import Hero from "../components/home/hero/Hero";
import Products from "../components/home/products/Products";
import Stats from "../components/home/stats/Stats";
import ContactUs from "../components/home/contactUs/ContactUs";
import WhyUs from "../components/home/whyUs/WhyUs";
import Customers from "../components/home/customers/Customers";

export default function Home() {
    return (
        <>
            <Hero/>
            <Products/>
            <Stats/>
            <WhyUs/>
            <Customers/>
            <ContactUs/>
        </>
    )
}