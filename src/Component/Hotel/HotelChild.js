import React from 'react';
import './Hotel.css'

const HotelChild = (props) => {

    const { image, name, guest, bedroom, bath, comment, rating, price } = props.item;
    return (
        <div>
            <div className="hotel">
                <div className="hotelPic">
                    <img src={image} />
                </div>
                <div className="hotelDetail">
                    <h4>hotel {name}</h4>
                    <p>guest:{guest} bed:{bedroom} bath:{bath}</p>
                    <p>{comment}</p>
                    <p>{price}</p>
                    <span>rating:{rating}</span>
                </div>
            </div>
        </div>
    );
};

export default HotelChild;