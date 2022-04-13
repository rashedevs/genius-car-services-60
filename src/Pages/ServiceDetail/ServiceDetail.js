import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h2>Welcome to detail of Id: {serviceId}</h2>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className="btn-primary">Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;