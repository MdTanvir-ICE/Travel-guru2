import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Grid from '@material-ui/core/Grid';
import Item from "./Item";
import "./Item.css";
import { PlaceData } from "../../PlaceData";
import Booking from "../BookingCart/Booking";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

function ItemParent(props) {

    const [displayPlace, setDisplayPlace] = useState(PlaceData[0].place);

    const [displayBody,setDisplayBody]=useState(PlaceData[0].body);
    const [goCart,setGocart]=useState(true);
      
    const setData= (name,body) => {
        setDisplayBody(body);
        setDisplayPlace(name);
        props.setDetectPlace(name);  
    }
    const controlCart= (val) => {
        console.log(goCart);
        setGocart(!goCart) ;
    }
  
    return (
        <div className="container">
         
            <Grid md={12} direction="row" container justify="space-between" >
                <Grid item md={4} spacing={2}>
                    <div className="bannerLeft">
                        <h1>{displayPlace}</h1>
                        <p>{displayBody}</p>
                       
         <button style={{ width: '150px' }} onClick={controlCart}  className="btn btn-warning">{  goCart ?'Booking-->'  : 'Back-->'}</button>

                    </div>
                </Grid>
            { 
             (goCart) ?
              <Grid item xs={12} md={8} className="bannrRight">
                    <Carousel breakPoints={breakPoints}>
                        {PlaceData.map(item => <Item key={item.id} setData={setData} img={item.img} place={item.place} body={item.body}></Item>)}
                    </Carousel>
               </Grid>

              :
              <Grid item xs={12} md={8} className="bannrRight">
              <Booking name={displayPlace}></Booking>
              </Grid>
            }


            </Grid>
        </div>
    );
}
export default ItemParent;
