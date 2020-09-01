import React from "react";
import "./Backdrop.css";
import { useRef } from "react";

const BackDrop = React.memo(props => {
  const a = useRef(0);
  console.log(a.current++);
  
  return <div className="backdrop" onClick={props.click}/>;
}, (prev, next) => {
  console.log(prev);
  console.log(next);
});

export default BackDrop;
