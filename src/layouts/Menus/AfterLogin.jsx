import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import LocalStorage from "../../helpers/localStorage";

const AfterLogin = () => {
  const {getRole} = LocalStorage();
  const role = getRole();
  return (
    <Fragment>
      <ul>
        {
          role === 1 ?
            <li className="toolbar__item">
            <Link to="/event">Event</Link>
          </li>
          :
          ''
        }
        
        <li className="toolbar__item">
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default AfterLogin;
