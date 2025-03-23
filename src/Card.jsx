import React from 'react';

export const Card = (props) => {
    return (
        <div>

            <div className='card container my-5' style={ {width : "18rem"}}>
                <img src= {props.img} />
                <div className='card-title'>{props.title}</div>
                <div className='card-text'>{props.description}</div>
                <ul>
                    <li>some</li>
                </ul>

                <button className='btn btn-primary' onClick={props.buttonAction} >Click Here</button>
            </div>
            
        </div>
    );
};
