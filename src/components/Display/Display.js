import React from 'react'
import './display.css';
const Display = () => {
    return (
        <div className="card card-content">
            <div className="imgTshirt text-center">
                <img className="img-responsive" src={'https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/black.png'} alt="t-shirt"/>
            </div>
            <div className="memeText text-center">
                <div className="upper-text">
                    <p>Upper Text</p>
                </div>
                <img src="http://via.placeholder.com/400x300" alt=""/>
            </div>
        </div>
    )
}

export default Display
