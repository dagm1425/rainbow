import React, { useEffect, useState, useRef } from "react";
import { PiClockCounterClockwise } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { BsBoxSeam } from "react-icons/bs";
import { PiBuildings } from "react-icons/pi";
import "./styles.css";

const Stats = () => {
  const statsData = [
    { target: 25, label: "Years of Experience", icon: <PiClockCounterClockwise /> },
    { target: 30, label: "Dedicated team members", icon: <GoPeople /> },
    { target: 7, label: "Locally manufactured items", icon: <BsBoxSeam /> },
    { target: 4000, label: "SQM of manufacturing facility", icon: <PiBuildings /> },
  ];

  return (
    <div className="stats-container">
      <div className="stats">
        {statsData.map((stat, index) => (
          <StatItem key={index} target={stat.target} label={stat.label} icon={stat.icon} />
        ))}
      </div>
    </div>
  );
};

const StatItem = ({ target, label, icon }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true); // Mark animation as started
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const duration = 2000; // Animation duration in milliseconds
    const increment = target / (duration / 10); // Step size for the animation

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        start = target; // Ensure exact value
      }
      setCount(Math.ceil(start)); // Update the count
    }, 10);

    return () => clearInterval(timer); // Clean up interval on component unmount
  }, [target, hasAnimated]);

  return (
    <div className="stat-item" ref={ref}>
      <h2 className="stat-number">
        {count}+
        <span>
          {icon}
        </span>
      </h2>
      <p>{label}</p>
    </div>
  );
};

export default Stats;
