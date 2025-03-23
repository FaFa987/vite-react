import React from 'react';

export const Card = () => {
    return (
        <div>

            <div className='card container my-5' style={ {width : "18rem"}}>
                <img src= "https://placehold.co/150" />
                <div className='card-title'>John Doe</div>
                <div className='card-text'>Some example text.</div>
                <ul>
                    <li>some</li>
                </ul>

                <a href="#" class="btn btn-primary">See Profile</a>
            </div>
            
        </div>
    );
};
