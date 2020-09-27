import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../App';
import { PlaceData } from '../../PlaceData';
import './Hotel.css'
import HotelChild from './HotelChild';

const Hotel = (props) => {

  
  
    var data = PlaceData.filter(item =>{     
    return (item.place===props.detectPlace)
    })
    
    return (

        <div class="container">
            <h3 style={{ color: 'white' }}>The hotel in {props.detectPlace}</h3>
            <hr />{
                data[0].hotel.map(item =>  <HotelChild item={item} ></HotelChild> )
            }
        </div>
    );
};

export default Hotel;