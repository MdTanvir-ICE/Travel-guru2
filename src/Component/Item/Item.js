 //import styled from "styled-components";

import React from 'react';
import image from '../Images/Image/Sreemongol.png'

const Item = (props) => {
   
    //    const itemBack={
    //     backgroundImage: 'url(' + props.img + ')',
    //     backgroundSize: '100% 400px'
    //    }
    //    const [setData,place,body]={props};
       console.log('props data is here',props.img);

    return (
        <div style={{
             backgroundImage: 'url(' + props.img + ')',
             backgroundSize: '100% 400px'

        }} onClick={()=>props.setData(props.place,props.body)} className='item style'>
            {/* <img style={img} src={require("../Images/Image/Sajek.png")} alt="my naem is tanivr"/>  */}
            <p>{props.place}</p>
           
        </div>
    );
};

export default Item;