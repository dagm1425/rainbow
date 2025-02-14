import { useState, useEffect } from "react";
import "./styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Product = ({ title, p1, p2, p3, img }) => {
    const [carouselWidth, setCarouselWidth] = useState(window.innerWidth <= 768 ? 350 : 550);

    useEffect(() => {
        const handleResize = () => {
            setCarouselWidth(window.innerWidth <= 768 ? 400 : 550);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="product-showcase">
            <Carousel width={carouselWidth} autoPlay={true} infiniteLoop={true}>
                {img.map((image, index) => (
                    <div key={index} className="carousel-image">
                        <img src={`/images/${image}`} alt={`Slide ${index}`} />
                    </div>
                ))}
            </Carousel>
            <div className="product-text-section">
                <h2>{title}</h2>
                <p>{p1}</p>
                <p>{p2}</p>
                <p>{p3}</p>
            </div>
        </div>
    );
};

export default Product;
