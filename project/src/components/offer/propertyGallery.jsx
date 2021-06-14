import React from "react";

function PropertyGallery (props){
  console.log(props)
  return(
    <div className="property__image-wrapper">
      <img className="property__image" src={props.img} alt="Photo studio" />
    </div>
  )
}
export default PropertyGallery;
