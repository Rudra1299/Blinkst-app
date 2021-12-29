import React from "react";
function Icon(props) {
  return (
    <>
      <img {...props} src={props.src} alt={props.alt}></img>
    </>
  );
}

export default Icon;
