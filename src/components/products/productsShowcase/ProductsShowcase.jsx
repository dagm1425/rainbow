import Product from "../product/Product";
import "./styles.css";

export default function ProductsShowcase() {
    const products = [
        {
            title: "Stationery Supplies",
            p1: "Rainbow offers high-quality stationery items designed to keep your office organized and efficient. From premium paper to elegant writing instruments, our products are crafted to enhance productivity while maintaining a professional touch.",
            p2: "At Rainbow, we take pride in our own manufacturing plant that produces superior stationery items. Our range includes gray boards, flat files, box files, and more, available in various sizes and thicknesses to cater to diverse needs. Each product is made with meticulous attention to detail and quality.",
            p3: "Our stationery products are trusted by a wide range of clients, including advertising companies, banks, insurance firms, and private businesses. Whether you're looking for customized solutions or bulk supplies, Rainbow is your reliable partner for all your office stationery needs.",
            img: ["stationery.jpg", "pen.jpg", "box file.jpg" ] 
        },
        {
            title: "Printed continuous forms",
            p1: "Rainbow offers specialized continuous printed paper tailored to meet your company’s needs. Ideal for forms, invoices, and other business documentation, our products come in a variety of sizes and paper types, ensuring seamless integration with your operations.",
            p2: "With cutting-edge printing machinery in our own manufacturing plant, Rainbow ensures the highest quality in every sheet of continuous printed paper. Our advanced production process guarantees precision and durability, making our paper the perfect choice for professional use.",
            p3: "Rainbow proudly serves a wide range of clients, from advertising companies to banks, insurance firms, and private businesses. Our commitment to delivering exceptional custom-printed paper solutions makes us a trusted partner for businesses across industries.",
            img: ["continuous-printed-paper.jpg", "continuous.jpg", "continuous form.jpg" ] 
        }, 
        {
            title: "Printer Consumables",
            p1: "Rainbow offers top-grade printer consumables under the well-established i-Aicon brand, known for its high performance and reliability. From toners to ink cartridges, our products are designed to keep your printers running at peak efficiency, ensuring seamless operation in any office environment.",
            p2: "As the sole authorized importer and distributor of i-Aicon in Ethiopia, Rainbow guarantees genuine, high-quality consumables. Our toners are compatible with renowned printer brands such as HP, Samsung, Lexmark, Toshiba, Canon, and Sharp, providing versatile and dependable solutions for all your printing needs.",
            p3: "At Rainbow, we go beyond providing consumables by offering exceptional after-sales services, including printer servicing and repairs. Our commitment to customer satisfaction ensures that your printers remain in top condition, giving you peace of mind and uninterrupted productivity.",
            img: ["printer-consumables.jpg", "toner.jpg", "ink.jpg" ] 
        }, 
    ]

    return (
        <div className="products-container">
            {products.map((product, index) => (
            <Product 
                key={index} 
                title={product.title} 
                p1={product.p1} 
                p2={product.p2} 
                p3={product.p3} 
                img={product.img} 
            />
            ))}
        </div>
    )
}

