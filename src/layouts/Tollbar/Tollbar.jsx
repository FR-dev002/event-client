import React, { Fragment, useContext } from "react";
import "./Tollbar.css";
import DrawerButton from "../SideDrawer/DrawerButton";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../ContextApi/authContect";
import AfterLogin from "../Menus/AfterLogin";
import BeforeLogin from "../Menus/BeforeLogin";

const Tollbar = props => {
  const { isLogged } = useContext(AuthContext);

  return (
    <Fragment>
      <header className="tollbar">
        <nav className="tollbar__navigation">
          <div className="toolbar__toggle-button">
            <DrawerButton click={props.drawerClickHandler} />
          </div>

          <div className="tollbar__logo">
            <Link to="/">Logo</Link>
          </div>
          <div className="spacer"></div>
          <div className="tollbar-navigation__items">
            {isLogged ? <AfterLogin /> : <BeforeLogin />}
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Tollbar;
