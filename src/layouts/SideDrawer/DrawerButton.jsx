import React from "react";
import { Fragment } from "react";
import "./DrawerButton.css";

const DrawerButton = props => {
  return (
    <Fragment>
      <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button__line"></div>
        <div className="toggle-button__line"></div>
        <div className="toggle-button__line"></div>
      </button>
    </Fragment>
  );
};

export default DrawerButton;
