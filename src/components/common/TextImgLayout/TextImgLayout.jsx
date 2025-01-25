import React from 'react'; 
import './styles.css';

export default function TextImgLayout({ index, label, title, description, imgSrc }) {
    return (
        <div className="container" style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
          <div className="text-content">
            <p>{label}</p>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <div className="image-content">
            <img src={`/images/${imgSrc}.jpg`}  alt={"Product image"} />
          </div>
        </div>
      );
}