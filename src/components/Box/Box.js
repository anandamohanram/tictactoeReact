import React from "react";
import "./Box.css";

const box = props => {
  return (
    <button className="box" onClick={props.clicked}>
      {props.value}
    </button>
  );
};

export default box;
