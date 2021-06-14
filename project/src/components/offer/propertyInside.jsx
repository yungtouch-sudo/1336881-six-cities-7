import React from "react";

function PropertyInside(props){
  console.log(props);
  return (
    <li className="property__inside-item">{props.good}</li>
  )
};

export default PropertyInside;
