import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, price, description, img } = service
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h4 className='mt-3'>{name}</h4>
            <p>Price: {price}</p>
            <p>Description: <small>{description}</small></p>
            <button className='btn btn-primary'>Book Now</button>
        </div>
    );
};

export default Service;