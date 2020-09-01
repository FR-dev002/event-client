import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BeforeLogin = () => {

  return (
    <Fragment>
      <ul>
        <li className="to0lbar__item">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default BeforeLogin;
