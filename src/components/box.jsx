
import React, { useState } from "react";


const Box = (props) =>{
    const {color}= props


    return(
        <div className='color-box' style={{backgroundColor: color}}>
        </div>
    )
}

export default Box