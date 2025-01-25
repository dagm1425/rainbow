import React from 'react';
import './styles.css';

const Customers = () => {
    const imagesFolder = '../../../images/customers/';
    const images = ['Amhara Bank Logo.png', 'Awash International Bank Logo.png', 'Bank of Abyssinia Logo.png', 'Commercial Bank of Ethiopia Logo.png', 'Dashen Bank Logo.png', 'Ethio Telecom Logo.png', 'Hibret Bank Logo.png', 'National Bank of Ethiopia Logo.png', 'National Oil Ethiopia Logo.png',  'Ola Energy Logo.png', 'Oromia International Bank Logo.png', 'Plan International Logo.png', 'Wegagen Bank Logo.png', 'Zemen Bank Logo.png '];

    return (
        <div className="scroller" data-direction="right" data-speed="slow" data-animated="true">
            <h2 className="main-title"><span class="decorative-line"></span>Notable Customers</h2>
            <div className="scroller__inner">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={`${imagesFolder}${image}`}
                        alt={`Customer ${index + 1}`}
                        // style={styles.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Customers;
