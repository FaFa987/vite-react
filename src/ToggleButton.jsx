
import React from 'react';

const ToggleButton = () => {
    return (
        <div className="container-fluid mt-3">
            
            <nav className='navbar navbar-dark bg-dark'>
              <div className="container-fluid">
              <img src='https://placehold.co/64x64/000000/FFFFFF?text=Dark&font=Poppins' alt='logo' />
              <h3 className='text-light'>Dark Mode</h3>
              </div>
            </nav>

            <nav className='navbar navbar-light bg-light my-3'>
              <div className="container-fluid">
              <img src='http://placehold.co/64x64/FFFFFF/000000?text=Light&font=Poppins' alt='logo' />
              <h3 className='text-dark'>Light Mode</h3>
              </div>
            </nav>

            <div className="container text-center py-3">
                <h1>Drark Mode is on</h1>
                <h1>Light Mode is on</h1>

                <button className='btn btn-primary mx-1'>Toggle LightMode</button>
                <button className='btn btn-dark mx-1'>Toggle DarkMode</button>
            </div>
            
        </div>
    );
};

export default ToggleButton;