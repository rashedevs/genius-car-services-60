import React from 'react';

const Footer = () => {
    return (
        <footer className='text-center py-3 mt-5 bg-dark text-white'>
            <h5><small>Copyright &#169;  {new Date().getFullYear()}</small></h5>
            <h6><small>All rights reserved to Rashed</small></h6>
        </footer>
    );
};

export default Footer;