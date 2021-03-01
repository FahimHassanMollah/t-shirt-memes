import React from 'react'
import './Seting.css'
const Setting = () => {
    const baseUrl='https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/';
    return (
        <div className="container-fluid">
            <h4 className="text-center">Choose Color</h4>
            <div className="tShirt-color">
                <img src={`${baseUrl}black.png`} alt="" srcset=""/>
                <img src={`${baseUrl}white.png`} alt="" srcset=""/>
                <img src={`${baseUrl}blue.png`} alt="" srcset=""/>
                <img src={`${baseUrl}red.png`} alt="" srcset=""/>
            </div>
        </div>
    )
}

export default Setting

