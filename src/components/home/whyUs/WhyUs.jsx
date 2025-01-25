import React from "react"
import "./styles.css"
import { FiAward, FiSettings, FiUser } from 'react-icons/fi';
import { LiaHandshake } from "react-icons/lia";
import { RiCustomerServiceLine } from "react-icons/ri";

const whyChooseUs = [
  {
    icon: <FiAward />,
    title: "Extensive Experience",
    description: "With decades of expertise, we provide innovative solutions backed by proven knowledge and financial capacity."
  },
  {
    icon: <FiSettings />,
    title: "Comprehensive Solutions",
    description: "Our diverse range of services ensures you have access to the latest technology and tailored solutions for your needs."
  },
  {
    icon: <FiUser />,
    title: "Customized Approach",
    description: "We design strategies and solutions around your unique requirements, delivering maximum efficiency and value."
  },
  {
    icon: <LiaHandshake />,
    title: "Strong Partnerships",
    description: "Through partnerships with leading vendors, we offer top-quality products and cutting-edge technology."
  },
  {
    icon: <RiCustomerServiceLine />,
    title: "Exceptional Customer Service",
    description: "Our dedicated team provides unmatched support, ensuring your success every step of the way."
  }
];


function FeatureCard({ icon, title, description }) {
    return (
      <div className="feature-card">
        <div className="feature-icon">{icon}</div>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
      </div>
    )
  }

export default function WhyUs() {
  return (
    <div className="features-grid">
      <div className="features-grid-row">
        {whyChooseUs.slice(0, 3).map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
        ))}
      </div>
      <div className="features-grid-row">
        {whyChooseUs.slice(3, 5).map((feature, index) => (
          <FeatureCard key={index + 3} icon={feature.icon} title={feature.title} description={feature.description} />
        ))}
      </div>
    </div>
  )
}




