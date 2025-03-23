import React from 'react';

export const Card = ({img, title, description, buttonAction}) => {
    return (
        <div>

            <div className='card container my-5' style={ {width : "18rem"}}>
                <img src= {img} />
                <div className='card-title'>{title}</div>
                <div className='card-text'>{description}</div>
                <ul>
                    <li>some</li>
                </ul>

                <button className='btn btn-primary' onClick={buttonAction} >Click Here</button>
            </div>
            
        </div>
    );
};
