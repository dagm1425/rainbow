import React from 'react';
import './styles.css'; 

const principles = [
  {
    title: "Experience",
    desc: "With over 25 years in the industry, Rainbow Computer Accessories and Stationery Supplier brings deep expertise and knowledge to the table. Our team’s experience in sourcing, supply chain management, and customer service ensures we provide reliable and effective solutions tailored to meet the needs of businesses and individuals.",
  },
  {
    title: "Quality",
    desc: "At Rainbow, we are committed to offering only the highest quality office supplies and accessories. We prioritize sourcing durable, reliable products that enhance productivity and efficiency, ensuring our customers receive the best value with every purchase.",
  },
  {
    title: "Customer-Centricity",
    desc: "Our customers are at the heart of everything we do. Rainbow strives to provide personalized service, ensuring that each client receives the right products and support to meet their unique needs. Our focus on building long-term relationships has been key to our success.",
  },
  {
    title: "Innovation",
    desc: "Rainbow embraces innovation by continuously evolving our product offerings and services to stay ahead of the market. We actively seek out new solutions and technologies that improve the way businesses operate and increase the efficiency of their daily functions.",
  },
];

const Principles = () => {
  return (
    <section 
      className="project-features-wrapper" 
      aria-labelledby="principles-title"
    >
      <h2 id="principles-title" className="main-principle-title">
        <span className="decorative-line" aria-hidden="true"></span>
        Our Guiding Principles
      </h2>
      <div className="project-features-grid">
        {principles.map((principle, i) => (
          <article key={i} className="project-feature">
            <h3>{principle.title}</h3>
            <p>{principle.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Principles;
