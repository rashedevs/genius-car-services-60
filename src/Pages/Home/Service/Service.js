import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, price, description, img } = service
    const navigate = useNavigate()
    const navigateToDetail = id => {
        // navigate('/service/' + { id })
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h4 className='mt-3'>{name}</h4>
            <p>Price: {price}</p>
            <p>Description: <small>{description}</small></p>
            <button onClick={() => navigateToDetail(id)} className='btn btn-primary'>Book Now</button>
        </div>
    );
};

export default Service;