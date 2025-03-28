
import React, { useState } from 'react';

const ToggleButton = () => {


   const [isDarkMode , setIsDarkMode] = useState(true)

    return (
        <div className="container-fluid mt-3">
            
            <nav className = {`navbar ${
              isDarkMode ? "navbar-dark bg-dark" : " navbar-light bg-light"
            }`}>
              <div className="container-fluid">
              <img src={
                isDarkMode ? "https://placehold.co/64x64/000000/FFFFFF?text=Dark&font=Poppins"
                 : "http://placehold.co/64x64/FFFFFF/000000?text=Light&font=Poppins"
              } alt='logo' />
              <h3 className={isDarkMode ? "text-light" : "text-dark"}>{isDarkMode ? "Dark Mode" : "Light Mode"}</h3>
              </div>
            </nav>


            <div className="container text-center py-3">
                <h1>Drark Mode is on</h1>
                <h1>Light Mode is on</h1>

                <button className='btn btn-primary mx-1' onClick={() => setIsDarkMode(false)}>Toggle LightMode</button>
                <button className='btn btn-dark mx-1' onClick={() => setIsDarkMode(true)}>Toggle DarkMode</button>
            </div>
            
        </div>
    );
};

export default ToggleButton;