import React from "react";
function Image(props) {
  return (
    <>
      <img
        {...props}
        style={{ width: props.width, height: props.height }}
        src={props.src}
        alt={props.alt}
      ></img>
    </>
  );
}

export default Image;
