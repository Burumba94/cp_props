import React from "react";
import Img from "./profile.jpg"
const ImageProfile = props => {
    console.log('props:',props)
    return <>
    <img src= {Img} />
    </>
}

export default ImageProfile;